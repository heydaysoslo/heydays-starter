import Sort from 'react-icons/lib/fa/sort-amount-asc'

export default {
  name: 'newsOrder',
  title: 'News Order',
  type: 'document',
  icon: Sort,
  fields: [
    {
      name: 'articles',
      title: 'News order',
      type: 'array',
      of: [
        {
          name: 'news',
          title: 'News',
          type: 'reference',
          to: [{ type: 'news' }]
        }
      ]
    }
  ]
}
