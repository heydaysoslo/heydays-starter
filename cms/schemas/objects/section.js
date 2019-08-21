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
      name: 'cta',
      title: 'Call to Action',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Section'
      }
    }
  }
}
