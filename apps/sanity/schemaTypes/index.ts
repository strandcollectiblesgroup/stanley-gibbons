import documents from "./documents"
import singletons from "./singletons"

import portableTextObjects from "./objects/portableText"
import shopifyObjects from "./objects/shopify"
import moduleObjects from "./objects/module"
import linkObjects from "./objects/link"
import globalObjects from "./objects/global"
import customProductObjects from "./objects/customProductOption"
import collectionObjects from "./objects/collection"


const objects = [
  ...shopifyObjects,
  ...moduleObjects,
  ...linkObjects,
  ...globalObjects,
  ...customProductObjects,
  ...collectionObjects,
  ...portableTextObjects,
]

export const schemaTypes = [...objects, ...singletons, ...documents]
