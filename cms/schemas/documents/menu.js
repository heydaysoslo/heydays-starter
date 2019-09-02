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
      items: 'item'
    },
    prepare({ items }) {
      return {
        title: 'Menu'
      }
    }
  }
}
