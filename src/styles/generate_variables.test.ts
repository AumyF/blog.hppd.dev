import { generateVariables, callVar } from "./variables";
import { css } from "@emotion/core";

describe("buildvar", (): void => {
  test("Buildvar", () => {
    const response = css(
      generateVariables({
        hoge: {
          fuga: {
            piyo: "piyo",
          },
        },
      })
    ).styles;
    expect(response).toBe("--hoge-fuga-piyo: piyo;");
    console.log(response);
  });
  test("cssからの手作りと一致するか", () => {
    const expected = css`
      --color-text: var(--white);
      --color-sidebar-background: transparent;
    `.styles.replace(/[\s+]/g, "");
    const recieved = css(
      generateVariables({
        color: {
          text: "var(--white)",
          sidebar: {
            background: "transparent",
          },
        },
      })
    ).styles.replace(/[\s+]/g, "");
    expect(recieved).toBe(expected);
  });
});
