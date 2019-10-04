import FaTags from 'react-icons/lib/fa/tags'
// import NewspaperIcon from '../../custom/components/icons/NewspaperIcon'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FaTags,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the post',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Featured image',
      type: 'mainImage'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'editor'
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
      media: 'mainImage'
    },
    prepare({ title, media }) {
      return {
        title,
        media
      }
    }
  }
}
