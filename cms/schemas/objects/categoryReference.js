import FaTag from 'react-icons/lib/fa/tag'
export default {
  name: 'categoryReference',
  title: 'Category Reference',
  type: 'object',
  icon: FaTag,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    }
  ],
  preview: {
    select: {
      title: 'category.title',
      media: 'category.image'
    },
    prepare({ title = 'No title', media = FaTag }) {
      return {
        title,
        media
      }
    }
  }
}
