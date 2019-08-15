import FaNewspaper from 'react-icons/lib/fa/newspaper-o'

export default {
  name: 'news',
  title: 'News',
  type: 'document',
  icon: FaNewspaper,
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
      title: 'Main image',
      type: 'mainImage'
    },
    // {
    //   name: 'excerpt',
    //   title: 'Excerpt',
    //   description:
    //     'An excerpt is a summary for the article. It is good to spend a little time on this to give users, google and social media a overview of what this post is about. Example usage is in cards and seo.',
    //   type: 'blockText',
    // },

    // {
    //   name: 'template',
    //   title: 'Template',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'Main article', value: 'main' },
    //       { title: 'News Article', value: 'news' }
    //     ]
    //   },
    // },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date'
    },
    // {
    //   name: 'menuTheme',
    //   title: 'Menu Theme',
    //   type: 'menuTheme',
    // },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
    // {
    //   name: 'authors',
    //   title: 'Authors',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'author',
    //       title: 'author',
    //       type: 'author'
    //     }
    //   ]
    // },
    // {
    //   name: 'pageBuilder',
    //   title: 'Page builder',
    //   type: 'pageBuilder'
    // }
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
