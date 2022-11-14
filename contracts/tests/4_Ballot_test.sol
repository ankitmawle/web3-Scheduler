// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "remix_tests.sol";
import "../contracts/3_Ballot.sol";

contract BallotTest {
   

    function test() public view returns(uint256){
        return block.timestamp;
    } 
}
