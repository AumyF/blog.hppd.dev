import React from "react";

export type ColorCheckerProps = {};

export const ColorChecker: React.FC<ColorCheckerProps> = () => (
  <div>
    <table>
      <tbody>
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(nr => (
          <tr key={nr}>
            {["gray"].map(clr => (
              <td key={nr + clr} className={["text", clr, nr].join("-")}>
                {`${clr}-${nr}`}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
