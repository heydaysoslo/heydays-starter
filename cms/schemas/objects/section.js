export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'editorMinimal'
    },
    {
      name: 'link',
      title: 'Call to Action',
      type: 'link'
    }
  ]
}
