// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/utils/Counters.sol";
    // TokenizAdmin is a modified version of ERC721 which we developed for our previous project
    // It can allow sending Crypto as gift cards packed inside NFTs
import "./tokenizAdmin_Interface.sol";

contract SchedulerContract {
    
    event ScheduleCreated(
        uint indexed id,
        address indexed NFTAddress, 
        uint256  tokenId, 
        address indexed ownerAddress, 
        address receiverAddress,
        uint time);

    event TransferedSuccessfully(
        uint indexed id,
        address indexed NFTAddress, 
        uint256  tokenId, 
        address indexed ownerAddress, 
        address  receiverAddress,
        uint  time);


/*
    Error Codes:-
    0    ----     Cancelled By user
    1    ----     Approval revoked
    2    ----     Ownership changed
*/
    event eventCancelled(
        uint indexed id,
        address indexed NFTAddress, 
        uint256 tokenId,
        uint indexed errorcode );

    
    using Counters for Counters.Counter;
    Counters.Counter public tracker;

    address public owner;
    address public keeper;
    address public admin;
    uint256 public price; 
    struct scheduleStructure{
        uint id;
        address NFTAddress; 
        uint256 tokenId; 
        address ownerAddress; 
        address receiverAddress;
        uint time;
        bool taskCompleted;
        bool cancelled;
    }

    mapping(uint => scheduleStructure) public schedules;
    mapping(uint => bool) public activeSchedules;
    constructor(address _admin, uint256 _price){
        owner=msg.sender;
        admin=_admin;
        price=_price;
    }

    function schedule(
        address _NFTAddress, 
        uint256 _tokenId, 
        address _ownerAddress, 
        address _receiverAddress,
        uint _time) public  payable{
            require(msg.value >= price,"Please pay required fees");
            require(msg.sender==_ownerAddress,"Only owner can schedule transfers ");
            require(block.timestamp<_time,"Only future executions can be scheduled");
            uint256 _tracker= tracker.current();
            schedules[_tracker].id=_tracker;
            schedules[_tracker].NFTAddress=_NFTAddress; 
            schedules[_tracker].tokenId=_tokenId; 
            schedules[_tracker].ownerAddress=_ownerAddress; 
            schedules[_tracker].receiverAddress=_receiverAddress;
            schedules[_tracker].time=_time;
            schedules[_tracker].taskCompleted=false;
            schedules[_tracker].cancelled=false;
            activeSchedules[_tracker]=true;
            tracker.increment();
            emit ScheduleCreated( _tracker,
                _NFTAddress, 
                _tokenId, 
                _ownerAddress, 
                _receiverAddress,
                _time);
    }

    function initiateTransfer(uint256 id) external {
        require(block.timestamp>=schedules[id].time,"deadline not reached yet");
        require(activeSchedules[id]==true,"schedule cancelled, or completed");
        require(msg.sender==keeper,"Only keeper can initiate transfer");
        uint256 tokenId=schedules[id].tokenId;
        address tokenOwnerAddress=schedules[id].ownerAddress;
        address tokenReceiverAddress=schedules[id].receiverAddress;
        address _NFTAddress=schedules[id].NFTAddress;
        TokenizAdmin NFTContract= TokenizAdmin(_NFTAddress);
        address currentOwner=NFTContract.ownerOf(tokenId);
        if(currentOwner!=tokenOwnerAddress){
            schedules[id].cancelled=true;
            activeSchedules[id]=false;
            emit eventCancelled(
                id,
                _NFTAddress, 
                tokenId,
                2 );    //owner changed
            return;  
        }
        bool isApproved=NFTContract.isApprovedForAll(tokenOwnerAddress,address(this));
        if(!isApproved){
            schedules[id].cancelled=true;
            activeSchedules[id]=false;
            emit eventCancelled(
                id,
                _NFTAddress, 
                tokenId,
                1 );//Approval Removed
            return;  
        }
        NFTContract.safeTransferFrom(
            tokenOwnerAddress,
            tokenReceiverAddress,
            tokenId);
        activeSchedules[id]=false;
        schedules[id].taskCompleted=true;
        emit TransferedSuccessfully(
                id,
                _NFTAddress, 
                tokenId,
                tokenOwnerAddress,
                tokenReceiverAddress,
                schedules[id].time

        );
    }

    function cancelTransfer(uint256 id) external{
        require(msg.sender==schedules[id].ownerAddress,"only owner can cancel"); 
        require(activeSchedules[id]==true,"transfer already completed or cancelled");
        require(block.timestamp<schedules[id].time,"Transfer has already been initiated");
        activeSchedules[id]=true;
        schedules[id].cancelled=true;
        emit eventCancelled(
            id,
            schedules[id].NFTAddress, 
            schedules[id].tokenId,
            0 );//owner cancelled   
    }
    function setAdmin(address _admin) external {
        require(msg.sender==owner,"only owner can set admin");
        admin=_admin;
    }

    
    function setOwner(address _owner) external {
        require(msg.sender==owner,"only owner change Owner");
        owner=_owner;
    }

    
    function setKeeper(address _keeper) external {
        require(msg.sender==owner || msg.sender==admin,"only owner change Owner");
        keeper=_keeper;
    }


    function setOwner(uint256 _price) external {
        require(msg.sender==owner,"only owner change price");
        price=_price;
    }

    function withdrawBalance(uint256 _amount) external{
        require(msg.sender==owner, "only owner can withdraw");
        payable(owner).transfer(_amount);
    }

    function sweepBalance() external{
        require(msg.sender==owner,"only owner can withdraw");
        payable(owner).transfer(address(this).balance);  
    } 


}
