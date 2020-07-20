export const ledger = {
	appVersion: {
		record: `
            => b001000000
            <= 0107426974636f696e06312e332e323101029000
        `,
		result: "1.3.21",
	},
	bip44: {
		path: "44'/0'/0'/0/0",
	},
	publicKey: {
		record: `
            => e040000015058000002c80000000800000000000000000000000
            <= 410486b865b52b753d0a84d09bc20063fab5d8453ec33c215d4019a5801c9c6438b917770b2782e29a9ecc6edb67cd1f0fbf05ec4c1236884b6d686d6be3b1588abb2231334b453654666641724c683466564d36756f517a7673597135767765744a63564dbce80dd580792cd18af542790e56aa813178dc28644bb5f03dbd44c85f2d2e7a9000
        `,
		result:
			"0486b865b52b753d0a84d09bc20063fab5d8453ec33c215d4019a5801c9c6438b917770b2782e29a9ecc6edb67cd1f0fbf05ec4c1236884b6d686d6be3b1588abb",
	},
	transaction: {
		record: `
            => b001000000
            <= 0107426974636f696e06312e332e323301029000
            => e042000009000000010100000001
            <= 9000
            => e0428000254ea60aeac5252c14291d428915bd7ccd1bfc4af009f4d4dc57ae597ed0420b71010000008a
            <= 9000
            => e04280003247304402201f36a12c240dbf9e566bc04321050b1984cd6eaf6caee8f02bb0bfec08e3354b022012ee2aeadcbbfd1e92959f
            <= 9000
            => e04280003257c15c1c6debb757b798451b104665aa3010569b49014104090b15bde569386734abf2a2b99f9ca6a50656627e77de663ca7
            <= 9000
            => e04280002a325702769986cf26cc9dd7fdea0af432c8e2becc867c932e1b9dd742f2a108997c2252e2bdebffffffff
            <= 9000
            => e04280000102
            <= 9000
            => e04280002281b72e00000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88ac
            <= 9000
            => e042800022a0860100000000001976a9144533f5fb9b4817f713c48f0bfe96b9f50c476c9b88ac
            <= 9000
            => e04280000400000000
            <= 32005df4c773da236484dae8f0fdba3d7e0ba1d05070d1a34fc44943e638441262a04f1001000000a086010000000000b890da969aa6f3109000
            => e04000000d03800000000000000000000000
            <= 41046666422d00f1b308fc7527198749f06fedb028b979c09f60d0348ef79c985e4138b86996b354774c434488d61c7fb20a83293ef3195d422fde9354e6cf2a74ce223137383731457244716465764c544c57424836577a6a556331454b4744517a434d41612d17bc55b7aa153ae07fba348692c2976e6889b769783d475ba7488fb547709000
            => e0440000050100000001
            <= 9000
            => e04480003b013832005df4c773da236484dae8f0fdba3d7e0ba1d05070d1a34fc44943e638441262a04f1001000000a086010000000000b890da969aa6f31019
            <= 9000
            => e04480001d76a9144533f5fb9b4817f713c48f0bfe96b9f50c476c9b88acffffffff
            <= 9000
            => e04a0000320281b72e00000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88aca0860100000000001976a9144533f5
            <= 00009000
            => e04a800013fb9b4817f713c48f0bfe96b9f50c476c9b88ac
            <= 00009000
            => e04800001303800000000000000000000000000000000001
            <= 3145022100ff492ad0b3a634aa7751761f7e063bf6ef4148cd44ef8930164580d5ba93a17802206fac94b32e296549e2e478ce806b58d61cfacbfed35ac4ceca26ac531f92b20a019000    
        `,
		payload:
			"01000000014ea60aeac5252c14291d428915bd7ccd1bfc4af009f4d4dc57ae597ed0420b71010000008a47304402201f36a12c240dbf9e566bc04321050b1984cd6eaf6caee8f02bb0bfec08e3354b022012ee2aeadcbbfd1e92959f57c15c1c6debb757b798451b104665aa3010569b49014104090b15bde569386734abf2a2b99f9ca6a50656627e77de663ca7325702769986cf26cc9dd7fdea0af432c8e2becc867c932e1b9dd742f2a108997c2252e2bdebffffffff0281b72e00000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88aca0860100000000001976a9144533f5fb9b4817f713c48f0bfe96b9f50c476c9b88ac00000000",
		result:
			"0100000001c773da236484dae8f0fdba3d7e0ba1d05070d1a34fc44943e638441262a04f10010000006b483045022100ff492ad0b3a634aa7751761f7e063bf6ef4148cd44ef8930164580d5ba93a17802206fac94b32e296549e2e478ce806b58d61cfacbfed35ac4ceca26ac531f92b20a0121026666422d00f1b308fc7527198749f06fedb028b979c09f60d0348ef79c985e41ffffffff0281b72e00000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88aca0860100000000001976a9144533f5fb9b4817f713c48f0bfe96b9f50c476c9b88ac00000000",
	},
	message: {
		record: `
            => e04e00011b058000002c80000000800000000000000000000000000474657374
            <= 00009000
            => e04e80000100
            <= 3045022100e32b32b8a6b4228155ba4d1a536d8fed9900606663fbbf4ea420ed8e944f9c18022053c97c74d2f6d8620d060584dc7886f5f3003684bb249508eb7066215172281a9000
        `,
		payload: "test",
		result:
			'{"v":0,"r":"e32b32b8a6b4228155ba4d1a536d8fed9900606663fbbf4ea420ed8e944f9c18","s":"53c97c74d2f6d8620d060584dc7886f5f3003684bb249508eb7066215172281a"}',
	},
};