import { useStaticQuery, graphql } from "gatsby";
import { UseStaticQueryQuery } from "../../types/graphqlTypes";
import { assertsNonNull } from "../libs/asserts-non-null";

export const useSite = () =>
  assertsNonNull(
    useStaticQuery<UseStaticQueryQuery>(graphql`
      query useStaticQuery {
        site {
          buildTime(formatString: "yyyy-MM-DD")
          siteMetadata {
            title
            description
          }
        }
      }
    `).site
  );
