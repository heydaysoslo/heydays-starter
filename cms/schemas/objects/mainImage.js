export default {
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  description:
    'This is the image that will be associated with this page/post/article. Usage is usually in cards and heros',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: `Alternative text`,
      description: `Describe what's in the image. Important for accesibility and SEO. Read more here https://blog.hubspot.com/marketing/image-alt-text`,
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ]
}
