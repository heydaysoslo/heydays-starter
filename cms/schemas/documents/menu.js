import FaList from 'react-icons/lib/fa/list-ul'

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: FaList,
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title'
    },
    {
      name: 'item',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'link',
          type: 'link'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      items: 'item'
    },
    prepare({ title }) {
      return {
        title: title || 'Menu'
      }
    }
  }
}
