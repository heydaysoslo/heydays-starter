import Link from 'react-icons/lib/io/link'
export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'reference',
      title: 'Internal Link',
      type: 'reference',
      to: [{ type: 'article' }, { type: 'page' }]
    },
    {
      name: 'title',
      title: 'Title',
      description:
        'If you have an internal link this will override the original title that is referenced',
      type: 'string'
    },
    {
      name: 'externalLink',
      title: 'External link',
      description: 'This will override the referenced document.',
      type: 'linkExternal'
    }
  ],
  preview: {
    select: {
      title: 'title',
      linkTitle: 'reference.title'
    },
    prepare({ title, linkTitle }) {
      return {
        title: title || linkTitle || 'No title',
        media: Link
      }
    }
  }
}
