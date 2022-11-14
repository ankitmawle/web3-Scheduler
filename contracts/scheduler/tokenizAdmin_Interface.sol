// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface TokenizAdmin {
    event Approval(
        address indexed owner,
        address indexed approved,
        uint256 indexed tokenId
    );
    event ApprovalForAll(
        address indexed owner,
        address indexed operator,
        bool approved
    );
    event Mint(
        string indexed tokenName,
        address indexed owner,
        uint256 _tokenId,
        string _tokenURI,
        address[] _tokensAddresses,
        uint256[] _tokenAmounts,
        uint256 _nativeCoinAmount,
        bool packed
    );
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event RoleAdminChanged(
        bytes32 indexed role,
        bytes32 indexed previousAdminRole,
        bytes32 indexed newAdminRole
    );
    event RoleGranted(
        bytes32 indexed role,
        address indexed account,
        address indexed sender
    );
    event RoleRevoked(
        bytes32 indexed role,
        address indexed account,
        address indexed sender
    );
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );
    event TransferFrom(
        address indexed sender,
        address indexed receiver,
        uint256 _tokenId,
        string _tokenURI,
        bool packed
    );
    event TransferFromAndUnpack(
        address indexed sender,
        address indexed receiver,
        uint256 _tokenId,
        string _tokenURI,
        bool packed
    );
    event Unpack(
        address indexed owner,
        uint256 _tokenId,
        string _tokenURI,
        bool packed
    );

    function DEFAULT_ADMIN_ROLE() external view returns (bytes32);

    function _changeAdminContract(address newAdminContract) external;

    function _changeWallet(address newWallet) external;

    function _openMint() external view returns (bool);

    function _tokenIdTracker() external view returns (uint256 _value);

    function addDiscountDetail(
        address _nftAddress,
        uint256 _nftTokenId,
        uint256 _discount
    ) external;

    function approve(address to, uint256 tokenId) external;

    function balanceOf(address owner) external view returns (uint256);

    function discountMint(
        string memory tokenName,
        string memory _tokenURI,
        address[] memory _tokensAddresses,
        uint256[] memory _amounts,
        uint256 _trxAmount,
        address _discountNftAddress,
        uint256 _discountNftTokenId
    ) external payable;

    function discountNfts(address, uint256) external view returns (uint256);

    function getApproved(uint256 tokenId) external view returns (address);

    function getInitialTokenAddress(uint256 tokenId)
        external
        view
        returns (address[] memory);

    function getInitialTokenBalance(uint256 tokenId, address reqToken)
        external
        view
        returns (uint256);

    function getLockedTokenAddress(uint256 tokenId)
        external
        view
        returns (address[] memory);

    function getLockedTokenBalance(uint256 tokenId, address reqToken)
        external
        view
        returns (uint256);

    function getRoleAdmin(bytes32 role) external view returns (bytes32);

    function getRoleMember(bytes32 role, uint256 index)
        external
        view
        returns (address);

    function getRoleMemberCount(bytes32 role) external view returns (uint256);

    function getTokenizAddress(uint256 tokenId) external view returns (address);

    function grantRole(bytes32 role, address account) external;

    function hasRole(bytes32 role, address account)
        external
        view
        returns (bool);

    function isApprovedForAll(address owner, address operator)
        external
        view
        returns (bool);

    function isPacked(uint256 tokenId) external view returns (bool);

    function mint(
        string memory tokenName,
        string memory _tokenURI,
        address[] memory _tokensAddresses,
        uint256[] memory _amounts,
        uint256 _trxAmount
    ) external payable;

    function name() external view returns (string memory);

    function owner() external view returns (address);

    function ownerOf(uint256 tokenId) external view returns (address);

    function price() external view returns (uint256);

    function renounceOwnership() external;

    function renounceRole(bytes32 role, address account) external;

    function revokeRole(bytes32 role, address account) external;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) external;

    function setApprovalForAll(address operator, bool approved) external;

    function setMint(bool openMint) external;

    function setPrice(uint256 mintPrice) external;

    function setProxyAddress(address proxyAddress) external;

    function setTokenURI(uint256 tokenId, string memory _tokenURI) external;

    function supportsInterface(bytes4 interfaceId) external view returns (bool);

    function symbol() external view returns (string memory);

    function tokenByIndex(uint256 index) external view returns (uint256);

    function tokenOfOwnerByIndex(address owner, uint256 index)
        external
        view
        returns (uint256);

    function tokenURI(uint256 tokenId) external view returns (string memory);

    function tokenizAddress(uint256) external view returns (address);

    function totalSupply() external view returns (uint256);

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function transferFromAndUnpack(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function transferOwnership(address newOwner) external;

    function unpack(uint256 tokenId) external;
}

