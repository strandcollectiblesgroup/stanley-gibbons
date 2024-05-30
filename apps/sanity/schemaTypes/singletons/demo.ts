import {DiamondIcon} from '@sanity/icons'
import {defineField} from 'sanity'

import {validateSlug} from '../../utils/validateSlug'
import {GROUPS} from '../../utils/constants'

export const demoType = defineField({
  name: 'demo',
  title: 'Demo Page',
  type: 'document',
  icon: DiamondIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      group: 'editorial',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      group: 'editorial',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
    }),
    defineField({
      name: 'featuredImage',
      type: 'defaultImage',
      group: 'editorial',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredVideo',
      type: 'defaultVideo',
      group: 'editorial',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'portableText',
      group: 'editorial',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
