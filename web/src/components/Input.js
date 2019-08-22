import React from 'react'
import { Field, ErrorMessage } from 'formik'
import cc from 'classcat'

const Input = ({
  name,
  placeholder,
  noLabel = false,
  type = 'text',
  errors,
  touched
}) => {
  const upperCaseName = `${name.slice(0, 1).toUpperCase()}${name.slice(
    1,
    name.length
  )}`
  return (
    <div className="Form__block">
      {!noLabel && (
        <label htmlFor={name} className="Form__label">
          {upperCaseName}
        </label>
      )}
      <Field
        className={cc({
          Form__input: true,
          'Form__input--error': errors[name] && touched[name]
        })}
        type={type}
        name={name}
        placeholder={placeholder && placeholder}
      />
      {errors[name] && (
        <p className="Form__feedback">
          <ErrorMessage name={name} />
        </p>
      )}
    </div>
  )
}

export default Input
