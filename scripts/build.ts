import { purflax } from "../mod.ts";


// Build CSS variables
const buildCSS = () => {
	let css = ":root {\n";
	for (const [name, data] of Object.entries(purflax.colors)){
		css += ` --purflax-${name}: ${data.hex} \n`;
	}
	css += "}";

	Deno.writeTextFileSync("./dist/purflax.css", css);
	console.log("CSS variables created.");
};


// Generate JSON export
const buildJSON = () => {
	const output = {};
	for (const [name, data] of Object.entries(purflax.colors)){
		output[name] = data.hex;
	}

	Deno.writeTextFileSync("./dist/purflax.json", JSON.stringify(output, null, 2));
	console.log("JSON generated.");
};

// Run the build
try {
	
	Deno.mkdirSync("dist");

} catch {

	// Directory already exists

}


buildCSS();
buildJSON();
