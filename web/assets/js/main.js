var schedulerABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
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
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "NFTAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "ScheduleCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "NFTAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "TransferedSuccessfully",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "NFTAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "errorcode",
				"type": "uint256"
			}
		],
		"name": "eventCancelled",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "activeSchedules",
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
		"name": "admin",
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
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "cancelTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "initiateTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "keeper",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_NFTAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_ownerAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_receiverAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "schedule",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "schedules",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "NFTAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "taskCompleted",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "cancelled",
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
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "setAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_keeper",
				"type": "address"
			}
		],
		"name": "setKeeper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sweepBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tracker",
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
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

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

const web3 = new Web3(window.ethereum);
tronWeb = window.tronWeb;
var accountAddress=""
var chain="";
var schedulerAddress="";
var chainId="";
var chainCoin="";
var mintPrice="";
var chainLogo="";
var chainData="";
var wallet="";
var decimals=18
var tokenAddresses=[];
var tokenAmounts=[]
var coinlist={};

function uploadVariables(_chain,_schedulerAddress,_chainId,_chainCoin,_mintPrice,_chainLogo,_wallet,decimal){
	chain=_chain
	schedulerAddress=_schedulerAddress
	chainId=_chainId
	chainCoin=_chainCoin
	mintPrice=_mintPrice
	chainLogo=_chainLogo
	wallet= _wallet
    decimals=decimal
	var chainTag=document.getElementsByClassName("chain")
	for (i of chainTag){
		i.innerHTML='<img class="icon" src="'+chainLogo+'"><i class="fas fa-angle-down"></i>';
	}
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
            loadNFTs()
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
            loadNFTs()
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

async function scheduleTransfer(event){
    var button_container =event.parentNode
    var cover=document.getElementsByClassName("cover")[0]
    cover.style.visibility="visible"
    let container=event.parentNode.parentNode.parentNode
    cover.dataset.address=container.dataset.address
    cover.dataset.id=container.dataset.id
    if(wallet!='tronlink'){
        var Contract=new web3.eth.Contract(tokenizABI,cover.dataset.address)
        response = await Contract.methods.isApprovedForAll(accountAddress,schedulerAddress).call()
        if(response){
           btn= document.getElementById("scheduleButton")
           btn.innerHTML='<i class="fa fa-calendar"></i> Schedule Transfer'
            btn.setAttribute('onclick','schedule(this)')
        }else{
            btn= document.getElementById("scheduleButton")
            btn.innerHTML='Please Approve transfer'
            btn.setAttribute('onclick','approve(this)')             
        }
    }
    else{
        let contract = await tronWeb.contract().at(cover.dataset.address); 
        let result = await contract.isApprovedForAll(accountAddress,schedulerAddress).call();
        if(result){
            btn= document.getElementById("scheduleButton")
            btn.innerHTML='<i class="fa fa-calendar"></i> Schedule Transfer'
             btn.setAttribute('onclick','schedule(this)')
         }else{
             btn= document.getElementById("scheduleButton")
             btn.innerHTML='Please Approve transfer'
             btn.setAttribute('onclick','approve(this)')             
         }
        return result;
    }
    
}

async function approve(event){
    var cover=document.getElementsByClassName("cover")[0]
    if(wallet!='tronlink'){
        var coinContract=new web3.eth.Contract(tokenizABI,cover.dataset.address)
        response = await coinContract.methods.setApprovalForAll(schedulerAddress,true).send({'from':accountAddress})
        
    }
    else{
        let contract = await tronWeb.contract().at(cover.dataset.address); 
        let result = await contract.setApprovalForAll(schedulerAddress,true).send();
        
    }

    if(wallet!='tronlink'){
        var Contract=new web3.eth.Contract(tokenizABI,cover.dataset.address)
        response = await Contract.methods.isApprovedForAll(accountAddress,schedulerAddress).call()
        if(response){
           btn= document.getElementById("scheduleButton")
           btn.innerHTML='<i class="fa fa-calendar"></i> Schedule Transfer'
            btn.setAttribute('onclick','schedule(this)')
        }else{
            btn= document.getElementById("scheduleButton")
            btn.innerHTML='Please Approve transfer'
            btn.setAttribute('onclick','approve(this)')             
        }
    }
    else{
        let contract = await tronWeb.contract().at(cover.dataset.address); 
        let result = await contract.isApprovedForAll(accountAddress,schedulerAddress).call();
        if(result){
            btn= document.getElementById("scheduleButton")
            btn.innerHTML='<i class="fa fa-calendar"></i> Schedule Transfer'
             btn.setAttribute('onclick','schedule(this)')
         }else{
             btn= document.getElementById("scheduleButton")
             btn.innerHTML='Please Approve transfer'
             btn.setAttribute('onclick','approve(this)')             
         }
        return result;
    }
}

async function schedule(event){
    let cover=event.parentNode.parentNode
    var tokenAddress=cover.dataset.address
    var tokenId=cover.dataset.id
    var receiverAddress=document.getElementById("add").value 
    var tempTime=document.getElementById("time").value 
    var schedularTime=new Date(tempTime).getTime()/1000
    if(wallet!='tronlink'){
        var contract=new web3.eth.Contract(schedulerABI,schedulerAddress)
        try{
        response = await contract.methods.schedule(tokenAddress,tokenId,accountAddress,receiverAddress,schedularTime).send({'from':accountAddress,'value':mintPrice*10**decimals})
        alert("success")
        response;
        }catch(err){
            alert(err)
        }
    }
    else{
        try{
        let contract = await tronWeb.contract().at(schedulerAddress); 
        let result = await contract.schedule(tokenAddress,tokenId,accountAddress,receiverAddress,schedularTime).send(
            {callValue:mintPrice*10**decimals,
			feeLimit:1000000000,}
        );
        alert("success")

    }catch(err){
        alert(err)
    }
    }
}
async function closeCover(){
    document.getElementsByClassName("cover")[0].style.visibility="hidden"
}

async function loadNFTs(){
	if(chain=='aurora'){
		uri="https://api.covalenthq.com/v1/1313161555/address/"+accountAddress+"/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_a6aa25a6340f4cb082bc6b512ba"
		let response= await fetch(uri,{method:'GET'})
		let account= await response.json()
		let tokens=account.data.items
		for(i of tokens){
			console.log(i)
			try{
				for(j of i.nft_data){
					var tId= j.token_id;
					var data={}
					var metadata=j.external_data
					console.log(metadata)
					data["NFT-Token-Address"]=i.contract_address;
					data["NFT-Token-ID"]=tId;
					data["NFT-name"]=metadata.name;
					data["NFT-desc"]='<detail><summary>'+metadata.description.slice(0,30)+'</summary>'+metadata.description+'</detail>';
					data["NFT-Img-Src"]=metadata.image;
					const template = document.querySelector('template')
					str=template.innerHTML
					for(j in data){
					var str=str.replace('{{'+j+'}}',data[j])
					}
					const grid=document.getElementById("collection-grid")
					grid.innerHTML =  grid.innerHTML +str
				}
			}
			catch(err){
				console.log("try", err)
			}
		}

	}
	else if(wallet!='tronlink'){
		const serverUrl = "https://nap9okyztkjh.usemoralis.com:2053/server";
		const appId = "JXIvHqKdkFgdOoioW3IcQvwKMajQPKnqqR0n4NZf";
		Moralis.start({ serverUrl, appId });
		var options = {chain: chain, address:accountAddress};
          const nfts = await Moralis.Web3API.account.getNFTs(options);
		 
		  for (var i=0;i<nfts.result.length;i++){
			try{
			var metadata=JSON.parse(nfts.result[i].metadata);
			var tId= nfts.result[i].token_id;
			var data={}
			console.log(metadata)
            data["NFT-Token-Address"]=nfts.result[i].token_address;
			data["NFT-Token-ID"]=tId;
			data["NFT-name"]=metadata.name;
			data["NFT-desc"]='<detail><summary>'+metadata.description.slice(0,30)+'</summary>'+metadata.description+'</detail>';
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
        let response= await fetch("https://shastapi.tronscan.org/api/account?address="+accountAddress,{method:'GET'})
        let account= await response.json()
        var tokens=account.trc721token_balances
        console.log(tokens)
        for (i in tokens){
		let contract = await tronWeb.contract().at(tokens[i].tokenId)
		let balance= tokens[i].balance
		var bal=parseInt(balance);
        console.log(bal)
		for (j=0;j<bal;j++){
			try{
			let id= await contract.tokenOfOwnerByIndex(accountAddress,j).call();
			var tokenId=parseInt(id._hex);
			let uri= await contract.tokenURI(tokenId).call();
			console.log(uri)
            let res= await fetch(uri,{method:'GET'});
            let metadata= await res.json()
            var data={}
            console.log(metadata)
            data["NFT-Token-Address"]=tokens[i].tokenId
            data["NFT-Token-ID"]=tokenId;
            data["NFT-name"]=metadata.name;
            data["NFT-desc"]=metadata.description;
            data["NFT-Img-Src"]=metadata.image;
            console.log(i)
            const template = document.querySelector('template')
            str=template.innerHTML
            for(k in data){
            var str=str.replace('{{'+k+'}}',data[k])
            }
            const grid=document.getElementById("collection-grid")
            grid.innerHTML =  grid.innerHTML +str
		}catch(err){
            console.log(err)
		continue
		}
	}

	}
    }}
