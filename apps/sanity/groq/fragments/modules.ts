import { portableTextFragment, defaultButtonQuery, featuredMediaFragment } from "./index"

export const mediaAndTextModuleQuery = `
  title,
  ${portableTextFragment},
  cta {
    ${defaultButtonQuery}
  },
  media {
    ${featuredMediaFragment}
  }
`;
