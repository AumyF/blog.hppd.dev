type colors =
  | "dark"
  | "shadow"
  | "stone"
  | "gray"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "gray";
type Scheme = { [index in colors]: string } & { name: string };

const homura: Scheme = {
  name: "A timetraveler girl",
  dark: "#1e1e20",
  shadow: "#303032",
  stone: "#404040",
  blue: "#63b3ed",
  yellow: "#f6e05e",
  gray: "#d0d0d0",
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

export default homura;
