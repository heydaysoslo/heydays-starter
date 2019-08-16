export default {
  name: 'cardOverride',
  title: 'Card Override',
  type: 'object',
  description: `We will get the information we need 
  from the refrence above. But if you wan't to override 
  the information in the card use the fields below.`,
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'editorMinimal'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ]
}
