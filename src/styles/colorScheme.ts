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
  sidebarBackground: "#e0e0e0",
  primaryAccent: "#63b3ed",
  secondaryAccent: "#f6e05e",
  text: "#d0d0d0",
  border: "#404040",
}
