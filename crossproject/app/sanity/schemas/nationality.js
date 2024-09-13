import { defineType } from 'sanity'

export default defineType({
  name: 'nationality',
  title: 'Nationality',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'flag',
      title: 'Flag',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
