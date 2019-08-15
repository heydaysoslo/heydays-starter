export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  __experimental_actions: ['update', 'publish' /*'create', 'delete'*/],
  fields: [
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
      items: 'items'
    },
    prepare({ items }) {
      let subtitle = 'No items'
      if (typeof items === 'object') {
        subtitle = Object.keys(items)
          .map(key => items[key].name)
          .join(', ')
      }
      return {
        title: 'Menu',
        subtitle
      }
    }
  }
}
