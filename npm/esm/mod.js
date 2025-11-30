import palette from "./palette.js";
export const purflax = palette.purflax;
export const getHex = (colorName) => {
    return purflax.colors[colorName].hex;
};
export const colorEntries = Object.entries(purflax.colors);
