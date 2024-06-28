import {defineArrayMember, defineField} from 'sanity'

export const featuredMediaType = defineField({
  name: 'featuredMedia',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'featuredMedia',
      type: 'array',
      options: {
        modal: {
          type: 'dialog',
        },
      },
      of: [defineArrayMember({type: 'defaultImage'}), defineArrayMember({type: 'defaultVideo'})],
      validation: (Rule) => Rule.max(1).error('Can only add one Media type at a time'),
    }),
  ],
})
