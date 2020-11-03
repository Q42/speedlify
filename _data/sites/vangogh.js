module.exports = {
	name: "vangoghmuseum.nl", // optional, falls back to object key
	description: "Van Gogh Museum",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 24 * 14, // 14 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
    "https://www.vangoghmuseum.nl/nl",
    "https://www.vangoghmuseum.nl/nl/bezoek/tickets-en-toegangsprijzen",
    "https://www.vangoghmuseum.nl/nl/kunst-en-verhalen/vincents-leven-1853-1890",
    "https://www.vangoghmuseum.nl/nl/over/steun-het-museum"
	]
};