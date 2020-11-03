module.exports = {
	name: "q42.nl", // optional, falls back to object key
	description: "Q42.nl",
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
    "https://www.q42.nl/",
    "https://www.q42.nl/werk/vangogh-museum",
    "https://www.q42.nl/over-q42"
	]
};