//SPDX-License-Identifier: UNLICENSED
pragma solidity <=0.8.19;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract DHACrowdSale is Ownable {
    using SafeERC20 for IERC20;
    address payable public _wallet;
    uint256 public BNB_rate;
    uint256 public T1_rate;
    IERC20 public token;
    IERC20 public t1Token;

    event BuyTokenByBNB(address buyer, uint256 amount);
    event BuyTokenByT1(address buyer, uint256 amount);
    event SetT1Token(IERC20 tokenAddress);
    event SetBNBRate(uint256 newRate);
    event SetT1Rate(uint256 newRate);

    constructor(
        uint256 bnb_rate,
        uint256 t1_rate,
        address payable wallet,
        IERC20 icotoken
    ) {
        BNB_rate = bnb_rate;
        T1_rate = t1_rate;
        _wallet = wallet;
        token = icotoken;
    }

    function setT1Token(IERC20 token_address) public onlyOwner {
        t1Token = token_address;
        emit SetT1Token(token_address);
    }

    function setBNBRate(uint256 new_rate) public onlyOwner {
        BNB_rate = new_rate;
        emit SetBNBRate(new_rate);
    }

    function setT1Rate(uint256 new_rate) public onlyOwner {
        T1_rate = new_rate;
        emit SetT1Rate(new_rate);
    }

    function buyTokenByBNB() external payable {
        uint256 bnbAmount = msg.value;
        uint256 amount = getTokenAmountBNB(bnbAmount);
        require(amount > 0, "Amount is zero");
        require(
            token.balanceOf(address(this)) >= amount,
            "Insufficient account balance"
        );
        require(
            msg.sender.balance >= bnbAmount,
            "Insufficient account balance"
        );
        payable(_wallet).transfer(bnbAmount);
        SafeERC20.safeTransfer(token, msg.sender, amount);
        emit BuyTokenByBNB(msg.sender, amount);
    }

function buyTokenByT1(uint256 T1Amount) external payable {
    uint256 amount = getTokenAmountT1(T1Amount);
    require(
        t1Token.balanceOf(msg.sender) >= T1Amount,
        "Insufficient account balance"
    );
    require(amount > 0, "Amount is zero");
    require(
        token.balanceOf(address(this)) >= amount,
        "Insufficient account balance"
    );
    
    SafeERC20.safeTransferFrom(t1Token, msg.sender, _wallet, T1Amount);
    SafeERC20.safeTransfer(token, msg.sender, amount);
    emit BuyTokenByT1(msg.sender, amount);
}

    function getTokenAmountBNB(uint256 BNBAmount)
        public
        view
        returns (uint256)
    {
        return BNBAmount * BNB_rate;
    }

    function getTokenAmountT1(uint256 T1Amount)
        public
        view
        returns (uint256)
    {
        return T1Amount * T1_rate;
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawErc20() public onlyOwner {
        t1Token.transfer(msg.sender, t1Token.balanceOf(address(this)));
    }
}