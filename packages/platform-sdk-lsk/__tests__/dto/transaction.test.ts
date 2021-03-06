import "jest-extended";
import { BigNumber } from "@arkecosystem/utils";

import { TransactionData } from "../../src/dto";
import Fixture from "../__fixtures__/client/transaction.json";

let subject: TransactionData;

beforeEach(() => (subject = new TransactionData(Fixture.data[0])));

describe("TransactionData", function () {
	test("#id", () => {
		expect(subject.id()).toBe("15210966682544220710");
	});

	test("#type", () => {
		expect(subject.type()).toBe(8);
	});

	test("#typeGroup", () => {
		expect(subject.typeGroup()).toBeUndefined();
	});

	test("#timestamp", () => {
		expect(subject.timestamp()).toBe(121185994);
	});

	test("#confirmations", () => {
		expect(subject.confirmations()).toEqual(BigNumber.make(35754));
	});

	test("#nonce", () => {
		expect(subject.nonce()).toBeUndefined();
	});

	test("#sender", () => {
		expect(subject.sender()).toBe("1a3aec07d0ff815c910d4c707a66b58a692dacb3de9d7d95a085bcee93738a07");
	});

	test("#recipient", () => {
		expect(subject.recipient()).toBe("18218254863282357638L");
	});

	test("#amount", () => {
		expect(subject.amount()).toEqual(BigNumber.make("1"));
	});

	test("#fee", () => {
		expect(subject.fee()).toEqual(BigNumber.make("10000000"));
	});

	test("#memo", () => {
		expect(subject.memo()).toBe("Account initialization");
	});

	test("#blockId", () => {
		expect(subject.blockId()).toBe("6722847676494099642");
	});

	test("#toObject", () => {
		expect(subject.toObject()).toBeObject();
	});

	test("#raw", () => {
		expect(subject.raw()).toEqual(Fixture.data[0]);
	});
});
