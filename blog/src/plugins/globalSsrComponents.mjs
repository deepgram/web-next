import glob from "glob";
import path from "path";

const cwd = process.cwd();

export default function globals() {
	/** @type {import('astro').AstroIntegration} */

	const integration = {
		name: "astro-global-ssr-components",
		hooks: {
			"astro:config:setup": ({ injectScript }) => {
				glob("src/{components,shared}/components/global/*.page-ssr.astro", {}, function (er, files) {
					files.forEach((file) => {
						const info = path.parse(file);
						const name = info.name.replace(".page-ssr", "");
						console.log(`$ importing ${name} into the global scope.`);
						injectScript("page-ssr", `import ${name} from "${cwd}/${file}"; global.${name} = ${name};`);
					});
				});
			},
		},
	};

	return integration;
}
