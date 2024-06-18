import { seoFragment, mediaAndTextModuleQuery, slugFragment } from "./fragments"

import groq from 'groq';

export const demoPageQuery = groq`*[_type == "demo"]{
  _createdAt,
  _id,
  _rev,
  _type,
  title,
  modules[] {
    _key,
    _type,
    _type == "mediaAndTextModule" => {
      ${mediaAndTextModuleQuery}
    }
  },
  ${seoFragment},
  ${slugFragment},
}`
