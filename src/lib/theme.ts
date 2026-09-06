export const THEME_IDS = ["oku", "porter"] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export type ThemeDefinition = {
  id: ThemeId;
  label: string;
  description: string;
  preview: {
    canvas: string;
    nav: string;
    side: string;
    main: string;
    card: string;
    accent: string;
    title: string;
  };
};

export const THEMES: readonly ThemeDefinition[] = [
  {
    id: "oku",
    label: "OKU",
    description: "Quiet / editorial",
    preview: {
      canvas: "#ede8db",
      nav: "#333333",
      side: "#d1ccbf",
      main: "#f5f2eb",
      card: "#dbd6c9",
      accent: "#bfad8c",
      title: "#131314",
    },
  },
  {
    id: "porter",
    label: "PORTER",
    description: "Gaming / expedition",
    preview: {
      canvas: "#0e1114",
      nav: "#030405",
      side: "#13171a",
      main: "#060809",
      card: "#13171a",
      accent: "#14c7eb",
      title: "#14c7eb",
    },
  },
];

