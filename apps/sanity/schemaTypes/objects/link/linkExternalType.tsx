import {EarthGlobeIcon} from '@sanity/icons'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { defineField } from "sanity";

export const linkExternalType = defineField({
  title: "External Link",
  name: "linkExternal",
  type: "object",
  icon: EarthGlobeIcon,
  components: {
    annotation: (props: { renderDefault: (arg0: any) => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode> | null | undefined }) => (
      <span>
        <EarthGlobeIcon
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
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
