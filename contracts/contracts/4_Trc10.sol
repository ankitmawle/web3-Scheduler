// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Trc10 {

    function TransferTokenTo(address payable toAddress, trcToken id, uint256 amount) public payable {
        toAddress.transferToken(amount,id);
    }

}
