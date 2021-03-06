import { Contracts } from "@arkecosystem/platform-sdk";

export class LinkService implements Contracts.LinkService {
	readonly #urls: { live: string; test: string } = {
		live: "https://tronscan.org/#/",
		test: "https://shasta.tronscan.org/#/",
	};

	readonly #baseUrl: string;

	public constructor(mode: string) {
		this.#baseUrl = this.#urls[mode];
	}

	public block(id: string): string {
		return `${this.#baseUrl}/block/${id}`;
	}

	public transaction(id: string): string {
		return `${this.#baseUrl}/transaction/${id}`;
	}

	public wallet(id: string): string {
		return `${this.#baseUrl}/address/${id}`;
	}
}
