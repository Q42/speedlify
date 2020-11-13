module.exports = {
	name: "staatsloterij.nl", // optional, falls back to object key
	description: "Staatsloterij",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: true,
	options: {
		frequency: 60 * 24 * 14, // 14 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
    "https://staatsloterij.nederlandseloterij.nl/",
    "https://staatsloterij.nederlandseloterij.nl/loten/10-november-trekking/staatslot",
    "https://staatsloterij.nederlandseloterij.nl/trekkingsuitslag",
    "https://staatsloterij.nederlandseloterij.nl/spel/prijzenpakket/10-oktober"
	]
};