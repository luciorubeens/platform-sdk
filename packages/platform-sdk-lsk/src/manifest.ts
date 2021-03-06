export const manifest = {
	name: "Lisk",
	ticker: "LSK",
	behaviours: {
		Client: {
			transaction: true,
			transactions: true,
			wallet: true,
			wallets: true,
			delegate: true,
			delegates: true,
			configuration: false,
			fees: false,
			syncing: false,
			broadcast: true,
		},
		Crypto: {
			transfer: true,
			secondSignature: true,
			delegateRegistration: true,
			vote: true,
			multiSignature: true,
			ipfs: false,
			multiPayment: false,
			delegateResignation: false,
			htlcLock: false,
			htlcClaim: false,
			htlcRefund: false,
		},
		Identity: {
			address: {
				passphrase: true,
				multiSignature: false,
				publicKey: true,
				privateKey: false,
				wif: false,
			},
			publicKey: {
				passphrase: true,
				multiSignature: false,
				wif: false,
			},
			privateKey: {
				passphrase: true,
				wif: false,
			},
			wif: {
				passphrase: false,
			},
			keyPair: {
				passphrase: true,
				publicKey: false,
				privateKey: false,
				wif: false,
			},
		},
		Message: {
			sign: true,
			verify: true,
		},
	},
};
