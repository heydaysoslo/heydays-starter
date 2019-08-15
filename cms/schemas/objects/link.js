import Link from 'react-icons/lib/io/link'
export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fieldsets: [
    {
      name: 'link',
      title: 'Link'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
      description: 'Paste the full url to the page ex. https://ably.med/contact'
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
