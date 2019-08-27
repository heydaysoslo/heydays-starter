import MdViewCarousel from 'react-icons/lib/md/view-carousel'

export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  icon: MdViewCarousel,
  fields: [
    {
      name: 'images',
      title: 'images',
      type: 'array',
      of: [
        {
          name: 'mainImage',
          title: 'Image',
          type: 'mainImage'
        }
      ]
    }
  ],
  preview: {
    prepare: () => ({
      title: 'Carousel'
    })
  }
}
