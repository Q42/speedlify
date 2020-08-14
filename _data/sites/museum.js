module.exports = {
	name: "museum.nl", // optional, falls back to object key
	description: "Museumvereniging website",
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
    "https://www.museum.nl/nl",
    "https://www.museum.nl/nl/zien-en-doen/musea",
    "https://www.museum.nl/nl/museumkaart",
    "https://www.museum.nl/nl/rijksmuseum-amsterdam",
    "https://www.museum.nl/nl/nederlands-watermuseum/activiteit/watermonsters-gezocht",
    "https://www.museum.nl/nl/water",
    "https://www.museum.nl/nl/over-ons",
    "https://www.museum.nl/nl/kasteel-amerongen/pronkstuk/portret-van-maria-frederica"
	]
};