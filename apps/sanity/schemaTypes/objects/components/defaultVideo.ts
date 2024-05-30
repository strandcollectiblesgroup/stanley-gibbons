import {defineField} from 'sanity'

export const defaultVideoType = defineField({
  name: 'defaultVideo',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'video',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value?.includes('youtube')) {
            return 'Can only submit a Youtube video'
          }
          return true
        }),
    }),
  ],
})
