// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DatHieuBin is ERC721, ERC721Enumerable, ERC721Pausable, Ownable {
    uint256 private _nextTokenId;
    uint256 maxSupply = 100;
    bool public publicMintOpen = false;
    bool public allowistMintOpen = false;

    mapping(address => bool) public allowList;
    constructor(address initialOwner)
        ERC721("DatHieuBin", "DHB")
        Ownable(initialOwner)
    {}


    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    // Type in the allowlist
    function setAllowList(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            allowList[addresses[i]] = true;
        }
    }

    function editMintWindows(
        bool _publicMintOpen,
        bool _allowistMintOpen
    ) external onlyOwner {
        publicMintOpen = _publicMintOpen;
        allowistMintOpen = _allowistMintOpen;

    }

    // Add Payment
    // Add supply limitations
    function publicMint() public payable {
        require(publicMintOpen, "Public Mint Closed");
        require(msg.value == 0.01 ether, "Khong du tien");
        internalMint();
    }
    // Only people with permission can mint nft with lower fee
    function allowistMint() public payable {
        require(allowistMintOpen, "Allowist Mint Closed");
        require(allowList[msg.sender], "Ban khong co quyen!");
        require(msg.value == 0.0001 ether, "Khong du tien");
        internalMint();
    }

    function internalMint() internal {
        require(totalSupply() < maxSupply, "Khong con NFT!");
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
    }



    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
