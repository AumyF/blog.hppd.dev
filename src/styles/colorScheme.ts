type colors =
  | "primaryAccent"
  | "background"
  | "cardBackground"
  | "sidebarBackground"
  | "text"
  | "border"
  | "secondaryAccent"

export const scheme: Readonly<
  {
    [index in colors]: string
  }
> = {
  background: "#1e1e20",
  cardBackground: "#303032",
  sidebarBackground: "#703399",
  primaryAccent: "#63b3ed",
  secondaryAccent: "#f6e05e",
  text: "#d0d0d0",
  border: "#404040",
}

const homura = {
  dark: "#1e1e20",
  shadow: "#303032",
  stone: "#404040",
  blue: "#63b3ed",
  yellow: "#f6e05e",
  gray: "#d0d0d0",
}

const Abyss = {} as const

export default homura
