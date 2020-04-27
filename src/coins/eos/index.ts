export const manifest = {
	name: "EOS",
	ticker: "EOS",
	behaviours: {
		Client: {
			getBlock: false,
			getBlocks: false,
			searchBlocks: false,
			getTransaction: false,
			getTransactions: false,
			searchTransactions: false,
			getWallet: false,
			getWallets: false,
			searchWallets: false,
			getDelegate: false,
			getDelegates: false,
			getPeers: false,
			getConfiguration: false,
			getCryptoConfiguration: false,
			getFeesByNode: false,
			getFeesByType: false,
			getSyncStatus: false,
			postTransactions: false,
		},
		Crypto: {
			createTransfer: false,
			createSecondSignature: false,
			createDelegateRegistration: false,
			createVote: false,
			createMultiSignature: false,
			createIpfs: false,
			createMultiPayment: false,
			createDelegateResignation: false,
			createHtlcLock: false,
			createHtlcClaim: false,
			createHtlcRefund: false,
		},
		Identity: {
			getAddress: {
				passphrase: false,
				multiSignature: false,
				publicKey: false,
				privateKey: false,
				wif: false,
			},
			getPublicKey: {
				passphrase: false,
				multiSignature: false,
				wif: false,
			},
			getPrivateKey: {
				passphrase: false,
				wif: false,
			},
			getWIF: {
				passphrase: false,
			},
			getKeyPair: {
				passphrase: false,
				publicKey: false,
				privateKey: false,
				wif: false,
			},
		},
		Message: {
			sign: false,
			verify: false,
		},
	},
};
