
var tokenizABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "mintPrice",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "proxyAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "_tokensAddresses",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "_tokenAmounts",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_nativeCoinAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "packed",
				"type": "bool"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "packed",
				"type": "bool"
			}
		],
		"name": "TransferFrom",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "packed",
				"type": "bool"
			}
		],
		"name": "TransferFromAndUnpack",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "packed",
				"type": "bool"
			}
		],
		"name": "Unpack",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAdminContract",
				"type": "address"
			}
		],
		"name": "_changeAdminContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newWallet",
				"type": "address"
			}
		],
		"name": "_changeWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_openMint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_tokenIdTracker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_nftTokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_discount",
				"type": "uint256"
			}
		],
		"name": "addDiscountDetail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_tokensAddresses",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_trxAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_discountNftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_discountNftTokenId",
				"type": "uint256"
			}
		],
		"name": "discountMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "discountNfts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getInitialTokenAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "reqToken",
				"type": "address"
			}
		],
		"name": "getInitialTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getLockedTokenAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "reqToken",
				"type": "address"
			}
		],
		"name": "getLockedTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getRoleMember",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleMemberCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenizAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "isPacked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_tokensAddresses",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_trxAmount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "openMint",
				"type": "bool"
			}
		],
		"name": "setMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mintPrice",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "proxyAddress",
				"type": "address"
			}
		],
		"name": "setProxyAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			}
		],
		"name": "setTokenURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenizAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFromAndUnpack",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "unpack",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var erc20ABI=[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]


const web3 = new Web3(window.ethereum);
tronWeb = window.tronWeb;

/*
window.addEventListener('message', function (e) {
	if (e.data.message && e.data.message.action == "tabReply") {
		console.log("tabReply event", e.data.message)
		if (e.data.message.data.data.node.chain == '_'){
			console.log("tronLink currently selects the main chain")
		}else{
			console.log("tronLink currently selects the side chain")
		}
	}

	if (e.data.message && e.data.message.action == "setAccount") {
		console.log("setAccount event", e.data.message)
		console.log("current address:", e.data.message.data.address)

	}
	if (e.data.message && e.data.message.action == "setNode") {
		console.log("setNode event", e.data.message)
		if (e.data.message.data.node.chain == '_'){
			console.log("tronLink currently selects the main chain")
		}else{
			console.log("tronLink currently selects the side chain")
		}
	  
   // Tronlink chrome v3.22.1 & Tronlink APP v4.3.4 started to support 
	if (e.data.message && e.data.message.action == "connect") {
		console.log("connect event", e.data.message.isTronLink)
	}
	  
   // Tronlink chrome v3.22.1 & Tronlink APP v4.3.4 started to support 
	if (e.data.message && e.data.message.action == "disconnect") {
		console.log("disconnect event", e.data.message.isTronLink)
	}
	  
   // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support 
	if (e.data.message && e.data.message.action == "accountsChanged") {
		console.log("accountsChanged event", e.data.message)
		console.log("current address:", e.data.message.data.address)
	}
	  
   // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support  
	if (e.data.message && e.data.message.action == "connectWeb") {
		console.log("connectWeb event", e.data.message)
		console.log("current address:", e.data.message.data.address)
	}
	  
   // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support   
	if (e.data.message && e.data.message.action == "accountsChanged") {
		console.log("accountsChanged event", e.data.message)
	}
	  
	// Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support      
	if (e.data.message && e.data.message.action == "acceptWeb") {
		console.log("acceptWeb event", e.data.message)
	}
	// Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support      
	if (e.data.message && e.data.message.action == "disconnectWeb") {
		console.log("disconnectWeb event", e.data.message)
	}
	  
	// Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support     
	if (e.data.message && e.data.message.action == "rejectWeb") {
		console.log("rejectWeb event", e.data.message)
	}
	   
	}
})
*/
var accountAddress=""
var chain="";
var tokenizAddress="";
var chainId="";
var chainCoin="";
var mintPrice="";
var chainLogo="";
var chainData="";
var wallet="";
var tokenAddresses=[];
var tokenAmounts=[]
var coinlist={};
function uploadVariables(_chain,_tokenizAddress,_chainId,_chainCoin,_mintPrice,_chainLogo,_wallet,_chainData){
	chain=_chain
	tokenizAddress=_tokenizAddress
	chainId=_chainId
	chainCoin=_chainCoin
	mintPrice=_mintPrice
	chainLogo=_chainLogo
	wallet= _wallet
	chainData=_chainData
	var chainTag=document.getElementsByClassName("chain")
	for (i of chainTag){
		i.innerHTML='<img class="icon" src="'+chainLogo+'"><i class="fas fa-angle-down"></i>';
	}
	document.getElementById("token").innerText=chainCoin
	document.getElementById("note").innerText="* Small fee of "+ mintPrice +" "+ chainCoin+" will be charged for minting tokeniz"
}

window.ethereum.on('accountsChanged', async () => {
    connectWallet();
});

async function connectWallet(){
    if(wallet != "tronlink"){
        try{
            await ethereum.send('eth_requestAccounts')
            //alert("Wallet connected successfully")
            const accounts= await web3.eth.getAccounts()
            accountAddress=accounts[0];
			w=document.getElementsByClassName("wallet")
			if(accountAddress!=""){
				w[0].innerText= accountAddress.slice(0,7)+"...";
				w[1].innerText= accountAddress.slice(0,7)+"...";
				w[0].onclick=disconnectWallet;
				w[1].onclick=disconnectWallet;
			}
            return accounts[0];
        }
        catch (err){
            alert(err.message)
			w=document.getElementsByClassName("wallet")
			
			w[0].innerText= "Login";
			w[1].innerText= "Login";
			w[0].onclick=connectWallet;
			w[1].onclick=connectWallet;
            return null;
        }
    }
    else{
        try{
			if(!tronLink){
				alert("Install Tronlink")
				return
			}
            await tronLink.request({method: 'tron_requestAccounts'})
            var currentaddress = window.tronWeb.defaultAddress.base58
            accountAddress=currentaddress;
			
			w=document.getElementsByClassName("wallet")
			if(accountAddress!=""){
				w[0].innerText= accountAddress.slice(0,7)+"...";
				w[1].innerText= accountAddress.slice(0,7)+"...";
				w[0].onclick=disconnectWallet;
				w[1].onclick=disconnectWallet;
			}
            return currentaddress
        }
        catch(err){
            alert(err.message)
			w=document.getElementsByClassName("wallet")
			
			w[0].innerText= "Login";
			w[1].innerText= "Login";
			w[0].onclick=connectWallet;
			w[1].onclick=connectWallet;
            return null;
        }
    }
}

async function disconnectWallet(wallet){
    if(wallet!="tronlink"){
        try{
			if(!confirm("Confirm changing wallet")){
				return
			}
			connectWallet();
        }
        catch(err){alert(err.message)};
    }
    else{
        try{
			if(!confirm("Disconnect Wallet"));
            await tronWeb.eth.currentProvider.disconnect()
            accountAddress=""
			
			w=document.getElementsByClassName("wallet")
			
			w[0].innerText= "Login";
			w[1].innerText= "Login";
			w[0].onclick=connectWallet;
			w[1].onclick=connectWallet;
		
            alert("Wallet disconnected successfully")
        }
        catch(err){alert(err.message)};
    }

}


async function checkAllowance(coinAddress,tokenizAddress){
    if(wallet!='tronlink'){
        var coinContract=new web3.eth.Contract(erc20ABI,coinAddress)
        response = await coinContract.methods.allowance(accountAddress,tokenizAddress).call()
        return response;
    }
    else{
        let contract = await tronWeb.contract.at(coinAddress); 
        let result = await contract.allowance(accountAddress,tokenizAddress).call();
        return result;
    }
}

async function approveTokenTransfer(coinAddress,amount,tokenizAddress){
    if(wallet!='tronlink'){
        var coinContract=new web3.eth.Contract(erc20ABI,coinAddress)
        response = await coinContract.methods.approve(tokenizAddress,amount).send({'from':accountAddress})
        return response;
    }
    else{
        let contract = await tronWeb.contract.at(coinAddress); 
        let result = await contract.approve(tokenizAddress,amount).send();
        return result;
    }
}

async function approve(event){
	var parent= event.parentNode
	var tokenDecimals=parseInt(parent.dataset.decimals)
	var res= await approveTokenTransfer(parent.dataset.address,(parseInt(parent.getElementsByClassName("itemAmount")[0].value)*10**tokenDecimals).toString(),tokenizAddress);
	if(res){
		var btn=parent.getElementsByClassName("appBtn")[0]
			btn.style["background-color"]="green"
			btn.innerText="Approved"
		btn.setAttribute( "onClick", "javascript: " );
		
	}
	console.log(res)
}

async function verifyChainID(chainID){
    if(wallet=='tronlink'){
        return "Cannot Change chain on tronlink"
    }
    var changed= false;
    try{
        activeChain= await web3.eth.getChainId()
        if (activeChain!=parseInt(chainID)){
            changed =await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x'+chainId.toString(16) }], // chainId must be in hexadecimal numbers
                    })
                    return(true)
        }
        else {changed= true;}
    }catch(err){return err};
    console.log(changed);
    return changed;
  }


async function mint(){
	const serverUrl = "https://nap9okyztkjh.usemoralis.com:2053/server";
	const appId = "JXIvHqKdkFgdOoioW3IcQvwKMajQPKnqqR0n4NZf";
	Moralis.start({ serverUrl, appId });
	var fileInput=document.getElementById("fileInput"); 
	const data= fileInput.files[0];

	var reader = new FileReader();
	reader.onload = async function() {
		const options = {
			abi: [
			{
				path: "image.png",
				content:reader.result,
				},
			],
		};
		var data={}
		var res=await Moralis.Web3API.storage.uploadFolder(options)
		console.log(res)
		tokenDict=tokenAddresses
		tokenAmount=tokenAmounts
		data["image"]= res[0].path
		data["name"]= document.getElementById("name").value;
		data["description"]= document.getElementById("public-desc").innerText;
		dict={"matic": parseInt(document.getElementById("coin").value)}
		data["attributes"]=dict;
		var salt = CryptoJS.lib.WordArray.random(128);
		var text=document.getElementById("page").innerHTML;
		encrypted=CryptoJS.AES.encrypt(text, salt.toString());
		data["data"] = encrypted.toString();
		const options2 = {
			abi: [
			{
				path: "tokeniz.json",
				content:data,
				},
			],
		};
		var res2= await Moralis.Web3API.storage.uploadFolder(options2)
		if(wallet!='tronlink'){
			var coinContract=new web3.eth.Contract(tokenizABI,tokenizAddress)
			callValue=(dict["matic"]+parseInt(mintPrice))*10**18

			response = await coinContract.methods.mint(data["name"],res2[0].path,tokenDict,tokenAmount,dict["matic"]*10**18)
				.send({from: accountAddress, value: callValue})
				.on('transactionHash', function(hash){
					const xhttp = new XMLHttpRequest();
					xhttp.open("POST", "/uploadPassPhrase", true);
					xhttp.send('uri='+res2[0].path+'&passPhrase='+salt.toString()+'&hash='+hash+'&address='+tokenizAddress+'&chain='+chain);
					console.log(hash)
				})
				.on('confirmation', function(confirmationNumber, receipt){
					
					console.log("Confirmation received")
				})
				.on('receipt', function(receipt){
					alert("Tokeniz Minted")
					// receipt example
				})
				.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
					console.log(error)
					alert(error)
				});
		}
		else{
			
			callValue=(dict["matic"]+parseInt(mintPrice))*10**6
			let contract = await tronWeb.contract().at(tokenizAddress); 
			let result = await contract.mint(data["name"],res2[0].path,tokenDict,tokenAmount,dict["matic"]*10**18)
				.send({
					callValue:callValue,
					feeLimit:1000000000,});
				console.log(result);
				alert("transaction sent")
				const xhttp = new XMLHttpRequest();
				xhttp.open("POST", "/uploadPassPhrase", true);
				xhttp.send('uri='+res2[0].path+'&passPhrase='+salt.toString()+'&hash='+result+'&address='+tokenizAddress+'&chain='+chain);
			return result;
		}

	};
	reader.readAsDataURL(data);
	  
}

async function loadCoins(){
	var api="https://token-list.sushi.com/"
	var tronAPI="https://apilist.tronscan.org/api/token_trc20?start=0"
	if(wallet!='tronlink'){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var coins = JSON.parse(this.responseText).tokens;
			coinlist={}
			for(i of coins){
				try{coinlist[i.chainId][i.address]=i}
				catch{coinlist[i.chainId]={}
					coinlist[i.chainId][i.address]=i}
			}
			console.log(coinlist);
			var listDiv=document.getElementById("listTokens")
			for(i in coinlist[chainId]){
				coinData=coinlist[chainId][i]
				div=document.createElement("div")
				div.className="listItem"
				div.dataset.address=i
				div.dataset.decimals=coinData.decimals
				img=document.createElement("img")
				img.src=coinData.logoURI;
				img.className="listimg"
				span=document.createElement("span")
				span.className="listName"
				span.innerText=coinData.name
				amount= document.createElement("input")
				amount.type="number"
				amount.className="itemAmount"
				amount.value=0;
				amount.min=0;
				span2=document.createElement("span")
				span2.className="listSymbol"
				span2.innerText=coinData.symbol
				div.appendChild(img);
				div.appendChild(span);
				div.appendChild(amount);
				div.appendChild(span2);
				div.innerHTML=div.innerHTML+'<button class="listButton" onClick="addToken(this)"><i class="fas fa-check">Add Token</i></button>'
				listDiv.append(div)
			}

		}
	};
	
	xhttp.open("GET", api, true);		
	xhttp.send();
	}
	else{
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var coinlist = JSON.parse(this.responseText).trc20_tokens;
				var listDiv=document.getElementById("listTokens")
				for(i of coinlist){
					coinData=i
					div=document.createElement("div")
					div.className="listItem"
					div.dataset.address=i["contract_address"]
					div.dataset.decimals=coinData.decimals
					img=document.createElement("img")
					img.src=coinData.icon_url;
					img.className="listimg"
					span=document.createElement("span")
					span.className="listName"
					span.innerText=coinData.name
					amount= document.createElement("input")
					amount.type="number"
					amount.className="itemAmount"
					amount.value=0;
					amount.min=0;
					span2=document.createElement("span")
					span2.className="listSymbol"
					span2.innerText=coinData.symbol
					div.appendChild(img);
					div.appendChild(span);
					div.appendChild(amount);
					div.appendChild(span2);
					div.innerHTML=div.innerHTML+'<button class="listButton" onClick="addToken(this)"><i class="fas fa-check">Add Token</i></button>'
					listDiv.append(div)
			}
		}
			}
		xhttp.open("GET", tronAPI, true)
		xhttp.send();
	}
}

async function updateCoinsDisplay(){
	
	var filter=document.getElementById("token-search").value.toUpperCase()
	var listDiv=document.getElementById("listTokens")
	var list=listDiv.getElementsByClassName("listName")

	for(i of list)
	{
		if(i.innerText.toUpperCase().indexOf(filter) >-1)
		{i.parentNode.style.display="grid"}
		else{i.parentNode.style.display="none"}

	}
	if(web3.utils.isAddress(filter)){
		try{
			coindata=coinlist[chainId][filter]
			for(i of list)
			{
				if(i.innerText.toUpperCase().indexOf(coinData.name) >-1)
				{i.parentNode.style.display="grid"}
				else{i.parentNode.style.display="none"}
		
			}
		}
		catch{
		var coinContract=new web3.eth.Contract(erc20ABI,filter)
        response1 = await coinContract.methods.name().call()
        response2 = await coinContract.methods.symbol().call()
		response3 = await coinContract.methods.decimals().call()
        coinlist[chainId][filter]={
			name: response1, symbol:response2,
			decimals:response3,chainId:chainId,
			imageURI:""
		}
        	var listDiv=document.getElementById("listTokens")
			coinData=coinlist[chainId][filter]
			div=document.createElement("div")
			div.className="listItem"
			div.dataset.address=i
			div.dataset.decimals=coinData.decimals
			img=document.createElement("img")
			img.src=coinData.logoURI;
			img.className="listimg"
			span=document.createElement("span")
			span.className="listName"
			span.innerText=coinData.name
			amount= document.createElement("input")
			amount.type="number"
			amount.className="itemAmount"
			amount.value=0;
			amount.min=0;

			span2=document.createElement("span")
			span2.className="listSymbol"
			span2.innerText=coinData.symbol
			div.appendChild(img);
			div.appendChild(span);
			div.appendChild(amount);
			div.appendChild(span2);
			div.innerHTML=div.innerHTML+'<button class="listButton" onClick="addToken(this)"><i class="fas fa-check">Add Token</i></button>'
			listDiv.append(div)


		}
	}
}

async function updateApproved(event){
	console.log(event)
	
	var node=event.parentNode
	var tokenDecimals=parseInt(node.dataset.decimals)
	var amount=node.getElementsByClassName("itemAmount")[0]
	var res=await checkAllowance(node.dataset.address,tokenizAddress)
	var btn=node.getElementsByClassName("appBtn")[0]
	console.log(parseInt(res),parseInt(amount.value)*10**tokenDecimals)
	if(parseInt(res)>parseInt(amount.value)*10**tokenDecimals){
		btn.style["background-color"]="green"
		btn.innerText="Approved"
	btn.setAttribute( "onClick", "javascript: " );
	}
	else{
		btn.style["background-color"]="red"
		btn.innerText="Approve"
		btn.setAttribute( "onClick", "javascript: approve(this)" );
	}
}

async function addToken(event){
	var node=event.parentNode
	var listDiv=document.getElementById("listTokens")
	listDiv.removeChild(node);
	var added=document.getElementById("addedTokens");
	
	node.classList.remove("listItem");
	node.classList.add("addedItem");
	
	var btn=node.getElementsByClassName("listButton")[0]
	console.log(btn)
	btn.setAttribute( "onClick", "javascript: removeToken(this)" );
	btn.innerText="Remove Token"
	res=await checkAllowance(node.dataset.address,tokenizAddress)
	var tokenDecimals=parseInt(node.dataset.decimals)
	var amount=node.getElementsByClassName("itemAmount")[0]
	amount.setAttribute( "onkeyup", "javascript: updateApproved(this)")
	amount.style.display="block"
	if(parseInt(res)>parseInt(amount.value)*10**tokenDecimals){
		node.innerHTML=node.innerHTML+'<button class="appBtn" style="background-color:red"  onClick="approve(this)">Approve</button>'
	}
	else{
		node.innerHTML=node.innerHTML+'<button class="appBtn" style="background-color:green" >Approved</button>'
	}
	added.appendChild(node)
	
}

async function removeToken(event){
	var node=event.parentNode
	var listDiv=document.getElementById("listTokens")
	
	var added=document.getElementById("addedTokens");
	added.removeChild(node);
	var approvebtn= node.getElementsByClassName("appBtn")[0]
	node.removeChild(approvebtn)
	node.classList.remove("addedItem");
	node.classList.add("listItem");
	var amount=node.getElementsByClassName("itemAmount")[0]
	amount.style.display="none"
	var btn=node.getElementsByClassName("listButton")[0]
	console.log(btn)
	btn.onClick=btn.setAttribute( "onClick", "javascript: addToken(this)" );
	btn.innerHTML='<i class="fas fa-check">Add Token</i>'
	listDiv.appendChild(node)
}

function doneAdding(){
	var approvals=document.querySelectorAll(".addedItem .appBtn")
	for(i of approvals){
		if(i.innerText!="Approved"){
			alert("Please Approve all tokens");
			return
		}
	}
	var added=document.getElementsByClassName("addedItem")
	var imgs=document.querySelectorAll("#addedTokens .listimg")
	var coinsImg=document.getElementById("coinsImages")
	for (i of imgs){
		coinsImg.appendChild(i)
		console.log(imgs,i)
	}
	document.getElementById("tokenAddButton").innerHTML='<i class="fas fa-edit"> </i>Edit Added Tokens'
	document.getElementById("tokenEditor").classList.add("hide");
	tokenAddresses=[]
	tokenAmounts=[] 
	for(i of added){
		tokenAddresses.push(i.dataset.address)
		tokenAmounts.push(i.getElementsByClassName("itemAmount")[0].value)
	}
	console.log(tokenAddresses,tokenAmounts)
	closeTokenEditor()
  }



async function loadNFTs(){
	if(wallet!='tronlink'){
		const serverUrl = "https://nap9okyztkjh.usemoralis.com:2053/server";
		const appId = "JXIvHqKdkFgdOoioW3IcQvwKMajQPKnqqR0n4NZf";
		Moralis.start({ serverUrl, appId });
		var options = {chain: chain, address:accountAddress, token_address:tokenizAddress};
          const nfts = await Moralis.Web3API.account.getNFTsForContract(options);
		 
		  for (var i=0;i<nfts.result.length;i++){
			try{
			var metadata=JSON.parse(nfts.result[i].metadata);
			var tId= nfts.result[i].token_id;
			var data={}
			console.log(metadata)
			data["NFT-Token-ID"]=tId;
			data["NFT-name"]=metadata.name;
			data["NFT-desc"]=metadata.description;
			data["NFT-Img-Src"]=metadata.image;
			const template = document.querySelector('template')
			str=template.innerHTML
			for(j in data){
			var str=str.replace('{{'+j+'}}',data[j])
			}
			const grid=document.getElementById("collection-grid")
			grid.innerHTML =  grid.innerHTML +str
		}catch{
			continue
		}
		  }
		}
	else{

		let contract = await tronWeb.contract().at(tokenizAddress)
		let balance= await contract.balanceOf(accountAddress).call();
		var bal=parseInt(balance._hex);
		for (i=0;i<bal;i++){
			try{
			let id= await contract.tokenOfOwnerByIndex(accountAddress,i).call();
			var tokenId=parseInt(id._hex);
			let uri= await contract.tokenURI(tokenId).call();
			console.log(uri)
			const xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var metadata= JSON.parse(this.responseText)
				var data={}
				console.log(metadata)
				data["NFT-Token-ID"]=tokenId;
				data["NFT-name"]=metadata.name;
				data["NFT-desc"]=metadata.description;
				data["NFT-Img-Src"]=metadata.image;
				console.log(i)
				const template = document.querySelector('template')
				str=template.innerHTML
				for(j in data){
				var str=str.replace('{{'+j+'}}',data[j])
				}
				const grid=document.getElementById("collection-grid")
				grid.innerHTML =  grid.innerHTML +str
			}}
			xhttp.open('GET',uri,true)
			xhttp.send()
		}catch{
		continue
		}
	}

	}
}

