import { Coins } from "@arkecosystem/platform-sdk";

import { schema } from "../src/schema";
import { manifest } from "../src/manifest";

export const createConfig = (options?: object) => {
	const config = new Coins.Config(options || { network: "livenet", peer: "https://coins.com/api/btc" }, schema)

	config.set('network', manifest.networks.livenet)

	return config
};