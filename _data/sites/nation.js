module.exports = {
	name: "nation.africa", // optional, falls back to object key
	description: "Nation",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: true,
	options: {
		frequency: 60 * 24 * 7, // 7 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://nation.africa/kenya",
		"https://nation.africa/kenya/sports",
		"https://nation.africa/kenya/sports/football/solskjaer-eyes-signings-as-sevilla-punish-wasteful-man-utd-1920166",
		"https://nation.africa/kenya/blogs-opinion/cartoons/2463910-2463910"
	]
};