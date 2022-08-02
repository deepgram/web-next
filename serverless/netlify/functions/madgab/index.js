const choices = [
	{ id: 1, suggestion: "Gnome morse ghoul", result: "No more school" },
	{ id: 2, suggestion: "Wand her womb hen", result: "Wonder woman" },
	{ id: 3, suggestion: "Shook or ands pies", result: "Sugar and spice" },
	{ id: 4, suggestion: "Boe day tote ships", result: "Potato chips" },
	{ id: 5, suggestion: "She is burg her", result: "Cheeseburger" },
	{ id: 6, suggestion: "Sad herd ay", result: "Saturday" },
	{ id: 7, suggestion: "Mise whims hoot", result: "My swimsuit" },
	{ id: 8, suggestion: "Wreck you lure hoard he calf", result: "Regular or decaf" },
	{ id: 9, suggestion: "Abe lesson indy skies", result: "A blessing in disguise" },
	{ id: 10, suggestion: "Dawn dutch mice tough", result: "Don't touch my stuff" },
	{ id: 11, suggestion: "Dew wino hue", result: "Do I know you" },
	{ id: 12, suggestion: "Sea can't higher dove fit", result: "Sick and tired of it" },
	{ id: 13, suggestion: "Bat tree snot ink looted", result: "Batteries not included" },
	{ id: 14, suggestion: "Kenya ear mean how", result: "Can you hear me now" },
	{ id: 15, suggestion: "Weed owns tan ditch ants", result: "We don't stand a chance" },
	{ id: 16, suggestion: "Heart official ant heller gents", result: "Artificial intelligence" },
	{ id: 17, suggestion: "Free quaintly as quest shuns", result: "Frequently asked questions" },
	{ id: 18, suggestion: "Read hick you luss", result: "Ridiculous" },
	{ id: 19, suggestion: "Wands up pawn eight I'm", result: "Once upon a time" },
	{ id: 20, suggestion: "Wide hidden chews haze hoe", result: "Why didn't you say so" },
	{ id: 21, suggestion: "Mass turk hard", result: "Mastercard" },
	{ id: 22, suggestion: "Tack seed eye fur", result: "Taxi driver" },
	{ id: 23, suggestion: "Wilk hum ohm", result: "Welcome home" },
	{ id: 24, suggestion: "Foyer inn form hay shun", result: "For your information" },
	{ id: 25, suggestion: "Weenie toot hawk", result: "We need to talk" },
	{ id: 26, suggestion: "Freeze ham pulse", result: "Free samples" },
	{ id: 27, suggestion: "Nod itch ants", result: "Not a chance" },
	{ id: 28, suggestion: "Tempo might hung", result: "Tip of my tongue" },
	{ id: 29, suggestion: "Spar cling what her", result: "Sparkling water" },
	{ id: 30, suggestion: "Tay cove ache a shun", result: "Take a vacation" },
	{ id: 31, suggestion: "Ape hand hub hare", result: "A panda bear" },
	{ id: 32, suggestion: "Inn tooth hen heir", result: "Into thin air" },
	{ id: 33, suggestion: "sa pea ch taht ex", result: "Speech to text" },
	{ id: 34, suggestion: "Gnome ore mist her nice thigh", result: "No more mister nice guy" },
	{ id: 35, suggestion: "Hi hand ry", result: "High and dry" },
	{ id: 36, suggestion: "Highs creek own", result: "Ice cream cone" },
	{ id: 37, suggestion: "Cohen peas", result: "Go in peace" },
	{ id: 38, suggestion: "Abe axe tree tally", result: "A backstreet alley" },
	{ id: 39, suggestion: "Pretty shacks cint", result: "British accent" },
	// { id: 40, suggestion: "Ace height force oar rise", result: "A sight for sore eyes" },
	{ id: 41, suggestion: "Lest ache attest", result: "Let's take a test" },
	{ id: 42, suggestion: "Wait who em hutch", result: "Way too much" },
];

// eslint-disable-next-line require-await
exports.handler = async function (event, context) {
	// Only allow POST
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: "Method Not Allowed",
			headers: {
				Allow: "Get",
			},
		};
	}
	const userChoices = [];
	let restart = false;
	if (event.body !== undefined) {
		const req = JSON.parse(event.body);
		userChoices.push(...req.choices);
	}

	const availableChoices = choices.filter((f) => !userChoices.includes(f.id));
	if (availableChoices.length === 0) {
		availableChoices.push(...choices);
		restart = true;
	}

	const selectedChoices = [];

	if (availableChoices.length > 3) {
		selectedChoices.push(getRandomChoice(availableChoices));
		selectedChoices.push(getRandomChoice(availableChoices));
		selectedChoices.push(getRandomChoice(availableChoices));
	} else {
		selectedChoices.push(...availableChoices);
	}
	return {
		statusCode: 200,
		body: JSON.stringify({
			restart,
			choices: selectedChoices,
		}),
	};
};

function getRandomChoice(availableChoices) {
	const randomNumber = Math.floor(Math.random() * availableChoices.length);
	return availableChoices.splice(randomNumber, 1)[0];
}
