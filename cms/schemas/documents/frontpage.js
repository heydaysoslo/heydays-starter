import FaHome from 'react-icons/lib/fa/home'
// import PageIcon from '../../custom/components/icons/PageIcon'

export default {
  name: 'frontpage',
  title: 'Front page',
  type: 'document',
  icon: FaHome,
  initialValue: {
    template: 'frontpage'
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'template',
      title: 'Template',
      type: 'string'
      // hidden: true
    },
    {
      name: 'pagebuilder',
      title: 'Page builder',
      type: 'pagebuilder'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'mainImage'
    },
    prepare({ title = 'No title', image, template }) {
      return {
        title,
        media: image,
        subtitle: `Template: ${template || 'default'}`
      }
    }
  }
}
