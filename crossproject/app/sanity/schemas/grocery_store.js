import { defineType } from 'sanity'

export default defineType({
  name: 'grocery_store',
  title: 'Grocery Store',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
