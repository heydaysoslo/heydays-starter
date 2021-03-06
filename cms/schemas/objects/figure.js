import MdImage from 'react-icons/lib/md/image'

export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  // options: {
  //   hotspot: true
  // },
  icon: MdImage,
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule =>
        Rule.error('You have to fill out the alternative text.').required(),
      description: `Describe what's in the image. Important for accesibility and SEO. Read more here https://blog.hubspot.com/marketing/image-alt-text`,
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
