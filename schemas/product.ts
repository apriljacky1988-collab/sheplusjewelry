export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Necklaces', value: 'Necklaces' },
          { title: 'Earrings', value: 'Earrings' },
          { title: 'Bracelets', value: 'Bracelets' },
          { title: 'Rings', value: 'Rings' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
    {
      name: 'moq',
      title: 'Minimum Order Quantity',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price (e.g. From $12/pc)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
