const information_for_contributors = [
	"This file has been converted from https://github.com/atom/language-php/blob/master/grammars/html.cson",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
const version = "https://github.com/atom/language-php/commit/ff64523c94c014d68f5dec189b05557649c5872a";
const name = "php-html";
const scopeName = "text.html.php";
const injections = {
	"L:meta.embedded.php.blade": {
		patterns: [
			{
				include: "text.html.basic"
			},
			{
				include: "text.html.php.blade#blade"
			}
		]
	},
	"text.html.php - (meta.embedded | meta.tag), L:((text.html.php meta.tag) - (meta.embedded.block.php | meta.embedded.line.php)), L:(source.js - (meta.embedded.block.php | meta.embedded.line.php)), L:(source.css - (meta.embedded.block.php | meta.embedded.line.php))": {
		patterns: [
			{
				include: "#php-tag"
			}
		]
	}
};
const patterns = [
	{
		begin: "\\A#!",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.comment.php"
			}
		},
		end: "$",
		name: "comment.line.shebang.php"
	},
	{
		include: "text.html.derivative"
	}
];
const repository = {
	"php-tag": {
		patterns: [
			{
				begin: "<\\?(?i:php|=)?(?![^?]*\\?>)",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					}
				},
				end: "(\\?)>",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.embedded.block.php",
				contentName: "source.php",
				patterns: [
					{
						include: "source.php"
					}
				]
			},
			{
				begin: "<\\?(?i:php|=)?",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					}
				},
				end: "(\\?)>",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.embedded.line.php",
				contentName: "source.php",
				patterns: [
					{
						include: "source.php"
					}
				]
			}
		]
	}
};
const phpHtml_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	injections: injections,
	patterns: patterns,
	repository: repository
};

export { phpHtml_tmLanguage as default, information_for_contributors, injections, name, patterns, repository, scopeName, version };
