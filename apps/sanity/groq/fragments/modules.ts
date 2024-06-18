import { portableTextFragment } from "./portableText"
import { featuredMediaFragment } from "./media"
import { defaultButtonQuery } from "./link"

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
