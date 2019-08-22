import * as yup from 'yup'

export const newsletterSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .email()
    .required(),
  concent: yup
    .bool()
    .oneOf([true], 'We need your concent in order to sign you up.'),
  createdOn: yup.date().default(function() {
    return new Date()
  })
})

export const createDefaultValues = schema => {
  if (!schema.fields) {
    console.warn(
      `Schema is missing the fields key. Pass the root of your yup schema`
    )
    return {}
  }
  return Object.keys(schema.fields).reduce((obj, key) => {
    if (schema.fields[key]._type === 'string') {
      obj[key] = ''
    } else if (schema.fields[key]._type === 'date') {
      obj[key] = new Date().toString()
    } else if (schema.fields[key]._type === 'boolean') {
      obj[key] = false
    } else {
      console.warn(`No default value found for ${schema.fields[key]._type}`)
    }
    return obj
  }, {})
}
