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
        // Section
        {
          name: 'section',
          title: 'Section',
          type: 'section'
        },
        // Cards
        {
          name: 'cardSection',
          title: 'Card Section',
          type: 'cardSection'
        },
        // Text section
        {
          name: 'textSection',
          title: 'Text Section',
          type: 'textSection'
        },
        // Full Image
        {
          name: 'imageSection',
          title: 'Full Image Section',
          type: 'imageSection'
        }
      ]
    }
  ]
}
