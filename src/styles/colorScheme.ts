import { Sidebar } from "../components/Sidebar";

export type colors =
  | "dark"
  | "jet"
  | "light"
  | "silver"
  | "snow"
  | "red"
  | "blue"
  | "green"
  | "yellow";
type Scheme = { [index in colors]: string } & { name: string };

const homura: Scheme = {
  name: "A timetraveler girl",
  dark: "#1e1e21",
  jet: "#303033",
  light: "#404040",
  silver: "#d0d0d0",
  snow: "#eee",
  blue: "#63b3ed",
  yellow: "#f6e05e",
  green: "#43B581",
  red: "#F04747",
};

const Abyss: Scheme = {
  ...homura,
  name: "An explorer of the gaming abyss",
  dark: "#36393F",
  yellow: "#FAA61A",
  green: "#43B581",
  blue: "#7289DA",
  red: "#F04747",
};

const Fiber: Scheme = {
  ...homura,
  name: "Fiberboard",
  dark: "#21374b",
  jet: "#314d66",
  silver: "#e7dacb",
  blue: "#27ae60",
};

type colorScheme = {
  name: string;
  main: {
    background: string;
    foreground: string;
  };
  sidebar: {
    background: string;
    foreground: string;
  };
};

const Dark: colorScheme = {
  name: "Dark",
  main: {
    background: "#1e1e21",
    foreground: "#d0d0d0",
  },
  sidebar: {
    background: "#0000",
    foreground: "#d0d0d0",
  },
};

export default homura;
