import Link from 'react-icons/lib/io/link'
export default {
  name: 'cta',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'article' }, { type: 'page' }]
    },
    {
      name: 'title',
      title: 'Override Title',
      description:
        'Use this field to override the default title of the document your referencing.',
      type: 'string'
    },
    {
      name: 'url',
      title: 'External link',
      description:
        'Use this for external links. This will override the referenced document.',
      type: 'url'
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
