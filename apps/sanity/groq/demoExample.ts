import { mediaAndTextModuleQuery, slugFragment } from "./demoComponents"
import { seoFragment } from "./seo"
import groq from 'groq';

export const demoPageQuery = groq`*[_type == "demo"]{
  _createdAt,
  _id,
  _rev,
  _type,
  modules[] {
    _key,
    _type,
    _type == "mediaAndTextModule" => {
      ${mediaAndTextModuleQuery}
    }
  },
  ${seoFragment},
  ${slugFragment},
  title,
  _updatedAt
}`
