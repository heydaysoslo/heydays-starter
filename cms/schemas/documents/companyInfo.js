import MdBusiness from 'react-icons/lib/md/business'

export default {
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /*'create', 'delete'*/],
  icon: MdBusiness,
  fieldsets: [
    { name: 'offices', title: 'Offices' },
    { name: 'contact', title: 'Contact' }
  ],
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
      fieldset: 'contact'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      fieldset: 'contact'
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      fieldset: 'contact'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address',
      fieldset: 'contact'
    },
    {
      name: 'orgNumber',
      title: 'Organization number',
      type: 'string',
      fieldset: 'contact'
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
