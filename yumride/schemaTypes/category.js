import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'text',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      // validation: rule=> rule.required()
    }),
  ],
})
