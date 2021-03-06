import "jest-extended";

import { TransactionService } from "../../src/services/transaction";

let subject: TransactionService;

beforeEach(async () => (subject = await TransactionService.construct({ network: "devnet" })));

describe("TransactionService", () => {
	describe("#transfer", () => {
		it("should verify", async () => {
			const result: any = await subject.transfer({
				sign: {
					passphrase: "this is a top secret passphrase",
				},
				data: {
					amount: 1,
					to: "cosmos1fvxjdyfdvat5g0ee7jmyemwl2n95ad7negf7ap",
				},
			});

			expect(result).toBeObject();
		});
	});
});
