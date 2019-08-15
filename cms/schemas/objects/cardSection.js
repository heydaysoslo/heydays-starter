export default {
  name: 'cardSection',
  title: 'Card Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'columnAmount',
      title: 'Column amount',
      description: 'Desired amount of columns.',
      type: 'number'
    },
    // {
    //   name: 'seeAllLink',
    //   title: 'See all link',
    //   type: 'pageLink'
    // },
    {
      name: 'cardsList',
      title: 'Cards',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'card'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'cardsList.0.content.title',
      media: 'cardsList.0.content.mainImage'
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        subtitle: 'Card section',
        media
      }
    }
  }
}
