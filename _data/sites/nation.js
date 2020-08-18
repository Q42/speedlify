module.exports = {
	name: "nation.co.ke", // optional, falls back to object key
	description: "Nation",
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
    "https://www.nation.co.ke/kenya/sports",
    "https://www.nation.co.ke/kenya/sports/football/solskjaer-eyes-signings-as-sevilla-punish-wasteful-man-utd-1920166"
	]
};