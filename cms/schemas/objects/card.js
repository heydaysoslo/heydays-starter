export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'reference',
      to: [{ type: 'news' }, { type: 'page' }]
    },
    {
      name: 'cardOverride',
      title: 'Card Override',
      type: 'cardOverride'
    }
  ],
  preview: {
    select: {
      title: 'content.title',
      media: 'content.mainImage'
    },
    prepare({ title = 'No title', media }) {
      return {
        title: `Card: ${title}`,
        media
      }
    }
  }
}
