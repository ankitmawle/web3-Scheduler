// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./trc721.sol";
import "./proxy.sol";
import "./tokeniz.sol";

contract TokenizAdmin is Context, TRC721, TRC721Enumerable, TRC721Metadata
{    
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIdTracker;
    proxy private _proxy;
    uint private _price;
    address private _wallet;
    bool public _openMint;
    mapping(uint256 => address) public tokenizAddress;
    address private _proxyAddress;
    bool _openWhitelistMint;
    mapping(address => bool) private whitelist;
    Roles.Role private admins;
    
    constructor(
        string memory name, 
        string memory symbol, 
        uint mintPrice, 
        address wallet, 
        address admin, 
        address proxyAddress
    ) TRC721Metadata(name, symbol) {
        _price = mintPrice;
        _proxyAddress=proxyAddress;
        _wallet = wallet;
        _openMint = false;
        admins.add( wallet);
        admins.add( admin);
    }
    
    function setPrice(uint mintPrice) external {
        require(admins.has(_msgSender()), "TokenizAdmin: must have admin role to change price");
        _price = mintPrice;
    }
 
    function setMint(bool openMint) external {
        require(admins.has(_msgSender()), "TokenizAdmin: must have admin role to open/close mint");
        _openMint = openMint;
    }
 

    function setTokenURI(
        uint256 tokenId, 
        string memory _tokenURI
    ) external {
        require(msg.sender==ownerOf(tokenId));
        _setTokenURI(tokenId, _tokenURI);
    }
    
    

    function price() public view returns (uint) {
        return _price;
    }
 
    function mint(
        string memory tokenName, 
        string memory _tokenURI, 
        address[] memory _tokensAddresses, 
        uint[] memory _amounts,
        uint _trxAmount
    ) public  payable {
        require(_openMint == true, "TokenizAdmin: minting is closed");
        uint _requiredCurrency= _price+_trxAmount;
        require(msg.value >= _requiredCurrency);
        uint256 _tracker= _tokenIdTracker.current();
        _tokenIdTracker.increment();
        _mint(msg.sender,_tracker);
        _setTokenURI(_tracker, _tokenURI);
        _proxy = proxy(_proxyAddress);
        tokenizAddress[_tracker]=_proxy.newTokeniz(msg.sender, tokenName, _tokenURI,  _tokensAddresses, _amounts, _tracker );
        
        for (uint i = 0; i < _tokensAddresses.length; i++) {
            address _tokenContracts= _tokensAddresses[i];
            IERC20 tokenContract = IERC20(_tokenContracts);
            tokenContract.transferFrom(msg.sender, tokenizAddress[_tracker], _amounts[i]);
        }

        payable(_wallet).transfer(_price);
        payable(tokenizAddress[_tracker]).transfer(_trxAmount);
    }
 
    function _burn(uint256 tokenId) internal virtual override(TRC721) {
        return TRC721Metadata._burn(tokenId);
    }
 
    function tokenURI(uint256 tokenId) public view override( TRC721Metadata) returns (string memory) {
        return TRC721Metadata.tokenURI(tokenId);
    }
 
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(TRC721, TRC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }
 
    function supportsInterface(bytes4 interfaceId) public view virtual override( TRC721, TRC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function getTokenizAddress(
        uint256 tokenId
    ) public view returns (address){
        return tokenizAddress[tokenId];
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        if(from!=address(0)){
            Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
            tokeniz._safeTransfer(from,to);
        }
    }

    function transferFromAndUnpack(        
        address from,
        address to,
        uint256 tokenId
    )   public{
        safeTransferFrom(from,to,tokenId);
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        tokeniz._safeUnPack();

    }

    function unpack(
        uint256 tokenId
    )   external {
        require(msg.sender==ownerOf(tokenId));
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        tokeniz._safeUnPack();
    } 

    function isPacked(
        uint tokenId
    ) external view returns(bool){
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        return tokeniz.isPacked();
    }

    
    function getLockedTokenBalance(
        uint tokenId
    ) external view returns(address[] memory){
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        return tokeniz.getLockedTokens();
    }

    function getLockedTokenBalance(
        uint tokenId,
        address reqToken
    ) external view returns(uint){
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        return tokeniz.getLockedTokenBalance(reqToken);
    }
}