import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Dish Description',
      type: 'text',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Dish Price(USD)',
      type: 'number',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Dish Image',
      type: 'image',
      // validation: rule=> rule.required()
    }),
  ],
})
