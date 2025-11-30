"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorEntries = exports.getHex = exports.purflax = void 0;
const palette_js_1 = __importDefault(require("./palette.js"));
exports.purflax = palette_js_1.default.purflax;
const getHex = (colorName) => {
    return exports.purflax.colors[colorName].hex;
};
exports.getHex = getHex;
exports.colorEntries = Object.entries(exports.purflax.colors);
