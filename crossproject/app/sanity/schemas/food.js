import { defineType } from 'sanity'

export default defineType({
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of food',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the food',
    },
    {
      name: 'nationality',
      title: 'Nationality',
      type: 'reference',
      to: [{ type: 'nationality' }],
    },
    {
      name: 'ecologicScores',
      title: 'Ecologic Scores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'groceryStore',
              title: 'Grocery Store',
              type: 'reference',
              to: [
                {
                  type: 'grocery_store',
                },
              ],
            },
            {
              name: 'score',
              title: 'Score',
              type: 'number',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) =>
                Rule.custom((price) => {
                  if (!price || price < 0) {
                    return 'Price must be present and non-negative'
                  }
                  return true
                }),
            },
          ],
        },
      ],
    },
  ],
})
