import MdBusiness from 'react-icons/lib/md/business'

export default {
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /*'create', 'delete'*/],
  icon: MdBusiness,
  options: {
    fieldset: [{ name: 'Offices' }]
  },
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'social',
      title: 'Social',
      type: 'social'
    },
    {
      name: 'offices',
      title: 'Offices',
      type: 'array',
      of: [
        {
          name: 'office',
          title: 'Office',
          type: 'office'
        }
      ]
    }
  ]
}
