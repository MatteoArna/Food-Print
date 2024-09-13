import { defineType } from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Recipe name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of recipe',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'foods',
      title: 'Foods',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'food' }],
        },
      ],
    },
  ],
})
