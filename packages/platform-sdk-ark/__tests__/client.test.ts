import "jest-extended";
import nock from "nock";

import { Client } from "../src/client";
import { Block, Delegate, Peer, Transaction, Wallet } from "../src/dto";

let subject: Client;

beforeEach(() => (subject = new Client("https://dexplorer.ark.io/api")));

beforeAll(() => nock.disableNetConnect());

describe("Client", function () {
	describe("#getTransaction", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/transactions/3e3817fd0c35bc36674f3874c2953fa3e35877cbcdb44a08bdc6083dbd39d572")
				.reply(200, require(`${__dirname}/__fixtures__/client/getTransaction.json`));

			const result = await subject.getTransaction(
				"3e3817fd0c35bc36674f3874c2953fa3e35877cbcdb44a08bdc6083dbd39d572",
			);

			expect(result).toBeInstanceOf(Transaction);
		});
	});

	describe("#getTransactions", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/transactions")
				.reply(200, require(`${__dirname}/__fixtures__/client/getTransactions.json`));

			const result = await subject.getTransactions();

			expect(result.data).toBeArray();
			expect(result.data[0]).toBeInstanceOf(Transaction);
		});
	});

	describe("#searchTransactions", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.post("/transactions/search")
				.reply(200, require(`${__dirname}/__fixtures__/client/getTransactions.json`));

			const result = await subject.searchTransactions({});

			expect(result.data).toBeArray();
			expect(result.data[0]).toBeInstanceOf(Transaction);
		});
	});

	describe("#getWallet", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/wallets/DNjuJEDQkhrJ7cA9FZ2iVXt5anYiM8Jtc9")
				.reply(200, require(`${__dirname}/__fixtures__/client/getWallet.json`));

			const result = await subject.getWallet("DNjuJEDQkhrJ7cA9FZ2iVXt5anYiM8Jtc9");

			expect(result).toBeInstanceOf(Wallet);
		});
	});

	describe("#getWallets", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/wallets")
				.reply(200, require(`${__dirname}/__fixtures__/client/getWallets.json`));

			const result = await subject.getWallets();

			expect(result.data).toBeArray();
			expect(result.data[0]).toBeInstanceOf(Wallet);
		});
	});

	describe("#searchWallets", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.post("/wallets/search")
				.reply(200, require(`${__dirname}/__fixtures__/client/getWallets.json`));

			const result = await subject.searchWallets({});

			expect(result.data).toBeArray();
			expect(result.data[0]).toBeInstanceOf(Wallet);
		});
	});

	describe("#getDelegate", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/delegates/arkx")
				.reply(200, require(`${__dirname}/__fixtures__/client/getDelegate.json`));

			const result = await subject.getDelegate("arkx");

			expect(result).toBeInstanceOf(Delegate);
		});
	});

	describe("#getDelegates", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/delegates")
				.reply(200, require(`${__dirname}/__fixtures__/client/getDelegates.json`));

			const result = await subject.getDelegates();

			expect(result.data).toBeArray();
			expect(result.data[0]).toBeInstanceOf(Delegate);
		});
	});

	describe("#getPeers", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/peers")
				.reply(200, require(`${__dirname}/__fixtures__/client/getPeers.json`));

			const result = await subject.getPeers();

			expect(result.data).toBeArray();
			expect(result.data[0]).toBeInstanceOf(Peer);
		});
	});

	describe("#getConfiguration", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/node/configuration")
				.reply(200, require(`${__dirname}/__fixtures__/client/getConfiguration.json`));

			const result = await subject.getConfiguration();

			expect(result).toBeObject();
		});
	});

	describe("#getCryptoConfiguration", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/node/configuration/crypto")
				.reply(200, require(`${__dirname}/__fixtures__/client/getCryptoConfiguration.json`));

			const result = await subject.getCryptoConfiguration();

			expect(result).toBeObject();
		});
	});

	describe("#getFeesByNode", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/node/fees?days=7")
				.reply(200, require(`${__dirname}/__fixtures__/client/getFeesByNode.json`));

			const result = await subject.getFeesByNode(7);

			expect(result).toBeObject();
		});
	});

	describe("#getFeesByType", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/transactions/fees")
				.reply(200, require(`${__dirname}/__fixtures__/client/getFeesByType.json`));

			const result = await subject.getFeesByType();

			expect(result).toBeObject();
		});
	});

	describe("#getSyncStatus", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.get("/node/syncing")
				.reply(200, require(`${__dirname}/__fixtures__/client/getSyncStatus.json`));

			const result = await subject.getSyncStatus();

			expect(result).toBeBoolean();
		});
	});

	describe("#postTransactions", () => {
		it("should succeed", async () => {
			nock("https://dexplorer.ark.io/api")
				.post("/transactions")
				.reply(200, require(`${__dirname}/__fixtures__/client/postTransactions.json`));

			const result = await subject.postTransactions([]);

			expect(result).toBeUndefined();
		});
	});
});