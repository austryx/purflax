export declare const purflax: {
    name: string;
    emoji: string;
    dark: boolean;
    colors: {
        crust: {
            hex: string;
            order: number;
        };
        base: {
            hex: string;
            order: number;
        };
        surface: {
            hex: string;
            order: number;
        };
        overlay: {
            hex: string;
            order: number;
        };
        text: {
            hex: string;
            order: number;
        };
        rosewater: {
            hex: string;
            order: number;
            accent: boolean;
        };
        mauve: {
            hex: string;
            order: number;
            accent: boolean;
        };
        primary: {
            hex: string;
            order: number;
            accent: boolean;
        };
    };
};
export declare const getHex: (colorName: keyof typeof purflax.colors) => string;
export declare const colorEntries: [string, {
    hex: string;
    order: number;
} | {
    hex: string;
    order: number;
} | {
    hex: string;
    order: number;
} | {
    hex: string;
    order: number;
} | {
    hex: string;
    order: number;
} | {
    hex: string;
    order: number;
    accent: boolean;
} | {
    hex: string;
    order: number;
    accent: boolean;
} | {
    hex: string;
    order: number;
    accent: boolean;
}][];
