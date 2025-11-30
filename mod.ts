import palette from "./palette.json" with { type: "json" }

export const purflax = palette.purflax;

export const getHex = (colorName: keyof typeof purflax.colors) => {
	return purflax.colors[colorName].hex;
}

export const colorEntries = Object.entries(purflax.colors);
