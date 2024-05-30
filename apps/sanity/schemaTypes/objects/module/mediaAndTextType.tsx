import {defineField} from 'sanity'

export const mediaAndTextType = defineField({
  name: 'mediaAndTextModule',
  title: 'Media And Text Module',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'portableText',
    }),
    defineField({
      name: 'cta',
      type: 'defaultButton',
    }),
    defineField({
      name: 'media',
      type: 'featuredMedia',
    }),
  ],
})
