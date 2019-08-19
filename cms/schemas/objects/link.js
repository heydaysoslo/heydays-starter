import Link from 'react-icons/lib/io/link'
export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'news' }, { type: 'page' }]
    },
    {
      name: 'title',
      title: 'Override Title',
      description:
        'Use this field to override the default title of the document your referencing.',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      linkTitle: 'link.title'
    },
    prepare({ title, linkTitle }) {
      return {
        title: title || linkTitle || 'No title',
        media: Link
      }
    }
  }
}
