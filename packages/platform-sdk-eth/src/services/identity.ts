import { Contracts, Exceptions } from "@arkecosystem/platform-sdk";
import Wallet from "ethereumjs-wallet";

export class IdentityService implements Contracts.IdentityService {
	public static async construct(opts: Contracts.KeyValuePair): Promise<IdentityService> {
		return new IdentityService();
	}

	public async destruct(): Promise<void> {
		//
	}

	public async address(opts: Contracts.KeyValuePair): Promise<string> {
		if (opts.passphrase) {
			throw new Exceptions.NotSupported(this.constructor.name, "address#passphrase");
		}

		if (opts.multiSignature) {
			throw new Exceptions.NotSupported(this.constructor.name, "address#multiSignature");
		}

		if (opts.publicKey) {
			return Wallet.fromPublicKey(Buffer.from(opts.publicKey, "hex")).getAddress().toString("hex");
		}

		if (opts.privateKey) {
			return Wallet.fromPrivateKey(Buffer.from(opts.privateKey, "hex")).getAddress().toString("hex");
		}

		if (opts.wif) {
			throw new Exceptions.NotSupported(this.constructor.name, "address#wif");
		}

		throw new Error("No input provided.");
	}

	public async publicKey(opts: Contracts.KeyValuePair): Promise<string> {
		if (opts.passphrase) {
			throw new Exceptions.NotSupported(this.constructor.name, "publicKey#passphrase");
		}

		if (opts.multiSignature) {
			throw new Exceptions.NotSupported(this.constructor.name, "publicKey#multiSignature");
		}

		if (opts.wif) {
			throw new Exceptions.NotSupported(this.constructor.name, "publicKey#wif");
		}

		throw new Error("No input provided.");
	}

	public async privateKey(opts: Contracts.KeyValuePair): Promise<string> {
		if (opts.passphrase) {
			throw new Exceptions.NotSupported(this.constructor.name, "privateKey#privateKey");
		}

		if (opts.wif) {
			throw new Exceptions.NotSupported(this.constructor.name, "privateKey#wif");
		}

		throw new Error("No input provided.");
	}

	public async wif(opts: Contracts.KeyValuePair): Promise<string> {
		if (opts.passphrase) {
			throw new Exceptions.NotSupported(this.constructor.name, "wif#wif");
		}

		throw new Error("No input provided.");
	}

	public async keyPair(opts: Contracts.KeyValuePair): Promise<Contracts.KeyPair> {
		if (opts.passphrase) {
			throw new Exceptions.NotSupported(this.constructor.name, "keyPair#passphrase");
		}

		if (opts.publicKey) {
			throw new Exceptions.NotSupported(this.constructor.name, "keyPair#publicKey");
		}

		if (opts.privateKey) {
			const keyPair = Wallet.fromPrivateKey(Buffer.from(opts.privateKey, "hex"));

			return {
				publicKey: keyPair.getPublicKey().toString("hex"),
				privateKey: keyPair.getPrivateKey().toString("hex"),
			};
		}

		if (opts.wif) {
			throw new Exceptions.NotSupported(this.constructor.name, "keyPair#wif");
		}

		throw new Error("No input provided.");
	}
}
