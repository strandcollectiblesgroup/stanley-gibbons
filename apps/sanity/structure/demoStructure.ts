import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Demos')
    .schemaType('demo')
    .child(
      S.editor()
        .schemaType('demo')
        .documentId('demo')
    ),
)
