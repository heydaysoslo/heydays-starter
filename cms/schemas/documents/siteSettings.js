import MdSettings from 'react-icons/lib/md/settings'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // liveEdit: false,
  // __experimental_actions: ['update', 'publish', /*'create', 'delete'*/],
  icon: MdSettings,
  fieldsets: [{ name: 'important', title: 'Important pages' }],
  fields: [
    {
      name: 'frontpage',
      title: 'Front page',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: Rule => Rule.required(),
      fieldset: 'important'
    },
    {
      name: 'privacypage',
      title: 'Privacy page',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: Rule => Rule.required(),
      fieldset: 'important'
    },
    {
      name: 'staticPages',
      description: "Pages added to this array can't be deleted",
      title: 'Static pages',
      type: 'array',
      of: [
        {
          name: 'page',
          title: 'Page',
          type: 'reference',
          to: [{ type: 'page' }, { type: 'menu' }, { type: 'person' }]
        }
      ]
    },
    {
      name: 'seo',
      title: 'Default SEO',
      type: 'seo'
    }
  ]
}
