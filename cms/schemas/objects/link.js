import Link from 'react-icons/lib/io/link'
export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'news' }, { type: 'page' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'No title',
        media: Link
      }
    }
  }
}
