export default {
  name: 'imageSection',
  title: 'Full Image Section',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'aspect',
      title: 'Aspect Ratio',
      type: 'aspect'
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare({ media }) {
      return {
        title: 'Image',
        media,
        subtitle: 'Image section'
      }
    }
  }
}
