import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Restaurant Description',
      type: 'text',
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurant',
      type: 'array',
      of:[{type:'reference', to:[{type:'restaurant'}]}]
    }),
  ],
})
