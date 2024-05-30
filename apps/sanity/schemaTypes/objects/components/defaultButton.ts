import {defineField} from 'sanity'
import {} from '@sanity/icons'

export const defaultButtonType = defineField({
  name: 'defaultButton',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
    }),
    defineField({
      title: 'Button Style',
      name: 'buttonStyle',
      type: 'string',
      initialValue: 'primary',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      initialValue: 'internal',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Link',
      name: 'linkExternal',
      type: 'linkExternal',
      hidden: ({ document }) => {
        if (document?.button) {
          // @ts-ignore
          return document.button.linkType !== 'internal'
        }
        return true;
      }
    }),
    defineField({
      title: 'Link',
      name: 'linkInternal',
      type: 'linkInternal',
      hidden: ({ document }) => {
        if (document?.button) {
          // @ts-ignore
          return document.button.linkType !== 'external'
        }
        return true;
      }
    })
  ],
})
