export default {
  name: 'Product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category'
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price'
    },
    {
      name: 'discount',
      type: 'string',
      title: 'Discount'
    },
    {
      name: 'gender',
      type: 'string',
      title: 'Gender'
    },
    {
      name: 'priority',
      type: 'string',
      title: 'Priority'
    },
    {
      name: 'productNumber',
      type: 'string',
      title: 'Product Number'
    }
  ]
};
