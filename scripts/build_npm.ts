import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";
import { purflax } from "../mod.ts";

await emptyDir("./npm");

await build({
	entryPoints: ["./mod.ts"],
	outDir: "./npm",
	shims: {
		deno: true,
	},
	package: {
		name: "@austryx/purflax",
		version: "1.0.0",
		description: "A dark-mode purple palette for my fellow purple enjoyers.",
		license: "MIT",
		repository: {
			type: "git",
			url: "git+https://github.com/purflax/palette.git",
		},
		bugs: {
			url: "https://github.com/purflax/palette/issues",
		},
	},
	
	postBuild() {
		try {
			Deno.copyFileSync("LICENSE", "npm/LICENSE");
			Deno.copyFileSync("README.md", "npm/README.md");
			Deno.copyFileSync("dist/purflax.css", "npm/purflax.css");

		} catch (e) {
			console.log(" Note: Could not copy README, LICENSE, or CSS.");
		}
	}
});
