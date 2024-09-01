import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
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
      name: 'image',
      title: 'Restaurant Banner',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Restaurant Latitude',
      type: 'number',
    }),
    defineField({
      name: 'lng',
      title: 'Restaurant Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a number between 1 to 5',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5).error('Please enter a value between 1 to 5'),
    }),
    defineField({
      name: 'reviews',
      title: 'Restaurant Reviews',
      type: 'string'
    }),
    defineField({
      name: 'type',
      title: 'Restaurant Category',
      type: 'reference',
      validation: (rule) => rule.required(),
      to:[{type:'category'}]
    }),
    defineField({
      name: 'dishes',
      title: 'Restaurant Dishes',
      type: 'array',
      of:[{type:'reference', to:[{type:'dish'}]}]
    }),
  ],
})
