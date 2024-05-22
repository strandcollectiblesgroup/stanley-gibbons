import {EnvelopeIcon} from '@sanity/icons'
import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react'
import {defineField} from 'sanity'

export const linkEmailType = defineField({
  title: 'Email link',
  name: 'linkEmail',
  type: 'object',
  icon: EnvelopeIcon,
  components: {
    annotation: (props: {
      renderDefault: (
        arg0: any,
      ) =>
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | Iterable<ReactNode>
        | null
        | undefined
    }) => (
      <span>
        <EnvelopeIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
    defineField({
      name: 'email',
      type: 'email',
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
})
