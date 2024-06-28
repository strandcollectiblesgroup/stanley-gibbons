import {defineArrayMember, defineField} from 'sanity'
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
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-ignore
          if (context?.parent && context.parent.link && !value) {
            return 'A label is required'
          }
          return true
        }),
    }),
    defineField({
      title: 'Button Style',
      name: 'buttonStyle',
      type: 'string',
      initialValue: 'ghost',
      options: {
        list: [
          {title: 'ghost', value: 'ghost'},
          {title: 'outline', value: 'outline'},
          {title: 'solid', value: 'solid'},
        ],
        layout: 'radio',
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-ignore
          const label = (context?.parent?.label as string) || ''
          if (!label && !value) {
            return 'Select your button style type'
          }
          return true
        }),
    }),
    defineField({
      name: 'link',
      type: 'array',
      options: {
        modal: {
          type: 'dialog',
        },
      },
      of: [defineArrayMember({type: 'linkExternal'}), defineArrayMember({type: 'linkInternal'})],

      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-ignore
          const label = (context?.parent?.label as string) || ''
          if (label && !value) {
            return 'Please select your button style type'
          }
          if (value && value.length > 1) {
            return 'Can only add one link type at a time'
          }
          return true
        }),
    }),
  ],
})
