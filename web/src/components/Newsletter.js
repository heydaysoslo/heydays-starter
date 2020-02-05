import React from 'react'
import { Formik } from 'formik'

import { newsletterSchema, createDefaultValues } from '../utils/validation'
import Input from './elements/Input'
import { Button } from './elements'

const Newsletter = props => {
  const {
    values,
    status,
    touched,
    errors,
    dirty,
    // setSubmitting,
    // isValid,
    isSubmitting,
    // isValidating,
    // handleChange,
    // handleBlur,
    handleSubmit,
    handleReset
  } = props
  return (
    <form className="Form" onSubmit={handleSubmit}>
      {(!status || status === 'error') && (
        <>
          <Input
            name="name"
            placeholder="Enter name"
            errors={errors}
            touched={touched}
          />
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            errors={errors}
            touched={touched}
          />
          <Input
            name="concent"
            type="checkbox"
            placeholder="Enter email"
            errors={errors}
            touched={touched}
          />
          <Button
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            variant="secondary"
          >
            Reset
          </Button>
          <Button type="submit" disabled={isSubmitting} variant="primary">
            {isSubmitting ? 'Submitting…' : 'Submit'}
          </Button>
        </>
      )}
      {status === 'error' && (
        <div className="Form__error">
          <h2 className="Form__title">
            Hmm, sorry about this. Something went wrong. Please try again later
          </h2>
        </div>
      )}
      {status === 'success' && (
        <div className="Form__success">
          <h2 className="Form__title">
            Thank you{values.name && ` ${values.name}`} for signing up!
          </h2>
        </div>
      )}

      {/* <pre style={{ fontSize: '16px' }}>{JSON.stringify(props, null, 2)}</pre> */}
    </form>
  )
}

const NewsletterWrapper = () => {
  // Create default values for all inputs described in schema for reset to work
  const defaultValues = createDefaultValues(newsletterSchema)
  return (
    <div className="Newsletter">
      <Formik
        initialValues={defaultValues}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setSubmitting(true)
          await fetch('/.netlify/functions/newsletter', {
            method: 'POST',
            body: JSON.stringify(values)
          })
            .then(res => res.json())
            .then(res => {
              setSubmitting(false)
              setStatus(res.status)
              console.log('response', res)
            })
            .catch(err => {
              setStatus('error')
              setSubmitting(false)
              console.log(err)
            })
        }}
        validationSchema={newsletterSchema}
      >
        {props => <Newsletter {...props} />}
      </Formik>
    </div>
  )
}

export default NewsletterWrapper
