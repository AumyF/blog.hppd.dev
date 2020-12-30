import { graphql, useStaticQuery } from "gatsby";

import { UseSiteQuery } from "../../types/graphqlTypes";
import { assertsNonNull } from "../utils/asserts-non-null";

export const useSite = (): NonNullable<UseSiteQuery["site"]> =>
  assertsNonNull(
    useStaticQuery<UseSiteQuery>(graphql`
      query useSite {
        site {
          buildTime(formatString: "yyyy-MM-DD")
          siteMetadata {
            title
            description
            domainName
          }
        }
      }
    `).site
  );
