import { mediaAndTextModuleQuery, slugFragment } from "./demoComponents"
import { seoFragment } from "./seo"
export const demoPageQuery = `*[_type == "demo"]{
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
