export default {
  name: 'pagebuilder',
  title: 'pagebuilder',
  type: 'object',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        // Cards
        {
          name: 'cardSection',
          title: 'Card Section',
          type: 'cardSection'
        },
        // Text section
        {
          name: 'textSection',
          title: 'Text section',
          type: 'textSection'
        }
      ]
    }
  ]
}
