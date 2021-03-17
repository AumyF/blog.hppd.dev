import { graphql, useStaticQuery } from "gatsby";

import { assertsNonNull } from "../utils/asserts-non-null";

export const useSite = (): NonNullable<GatsbyTypes.useSiteQuery["site"]> =>
  assertsNonNull(
    useStaticQuery<GatsbyTypes.useSiteQuery>(graphql`
      query useSite {
        site {
          buildTime(formatString: "yyyy-MM-DD")
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `).site
  );
