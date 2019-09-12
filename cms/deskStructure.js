import S from '@sanity/desk-tool/structure-builder'
import config, {
  createMenuDeskStructure,
  createCustomTypeDeskStructure
} from './heydays-config'

import MdSettings from 'react-icons/lib/md/settings'
import MdBusiness from 'react-icons/lib/md/business'

// Create menus
const menus = createMenuDeskStructure(config.menus)

const customTypesWithOrderPage = createCustomTypeDeskStructure(
  config.customTypes
)

const hiddenCustomTypes = config.customTypes.reduce((res, item) => {
  const typesToHide = [item.typeId, item.orderTypeId]
  res.push(...typesToHide)
  return res
}, [])

const pages =
  S &&
  S.documentTypeListItems().filter(
    listItem => config.pageTypes.indexOf(listItem.getId()) !== -1
  )

const hiddenDocTypes = listItem =>
  ![
    'menu',
    'companyInfo',
    'siteSettings',
    ...config.pageTypes,
    ...hiddenCustomTypes
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      menus,
      ...pages,
      ...customTypesWithOrderPage,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Company Info')
        .icon(MdBusiness)
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        ),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('siteSettings')
                    .title('Site Settings')
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                )
            ])
        )
    ])
