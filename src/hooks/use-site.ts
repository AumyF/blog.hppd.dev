import { useStaticQuery, graphql } from "gatsby";
import {
  Site,
  SiteSiteMetadata,
  UseStaticQueryQuery,
} from "../../types/graphqlTypes";
import { assertsNonNull } from "../utils/asserts-non-null";

export const useSite = (): Pick<Site, "buildTime"> & {
  siteMetadata?:
    | Pick<SiteSiteMetadata, "title" | "description">
    | null
    | undefined;
} =>
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
