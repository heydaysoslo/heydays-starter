import React from 'react'
import styled, { css } from 'styled-components'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import { easings } from '../utils/animation'
import {
  Button,
  Stagger,
  Radios,
  Checkbox,
  Input,
  FormBlock,
  StyledTextarea
} from './elements'

const Newsletter = ({ className }) => {
  const [success, setSuccess] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState(null)
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    control,
    formState: { isSubmitting, isSubmitted, touched, isDirty, isValid }
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      Message: '',
      radio: 'radio1'
    }
  })
  const onSubmit = async data => {
    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log('Newsletter -> res', res)
        setSuccess({ status: true })
      })
      .catch(err => {
        console.log(err)
        setSuccess({
          status: false,
          message: 'Something went wrong. Please try again later.'
        })
      })
  }

  const values = getValues()
  console.log('Newsletter -> values', values)

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <Stagger>
        <Input
          error={errors.fullName}
          register={register}
          name="fullName"
          type="text"
          placeholder="Full name"
          rules={{
            required: {
              value: true,
              message: 'We need ur name bruh'
            }
          }}
        />
        <Input
          error={errors.email}
          register={register}
          name="email"
          type="email"
          placeholder="Email"
          rules={{
            required: {
              value: true,
              message: 'We need to be able to contact you bruh'
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: `Nah. You cheatin us bruh`
            }
          }}
        />
        <Checkbox
          defaultValue={false}
          control={control}
          name="concent"
          rules={{
            required: { value: true, message: 'We need ur concent bruh' }
          }}
        >
          Checkbox
        </Checkbox>
        <FormBlock>
          <Radios
            values={values}
            register={register}
            control={control}
            rules={{ required: true }}
            error={errors.radio}
            defaultValue="radio1"
            options={[
              { id: 'radio1', value: 'radio1', label: 'Radio 1' },
              { id: 'radio2', value: 'radio2', label: 'Radio 2' }
            ]}
            name="radio"
          />
        </FormBlock>
        <FormBlock>
          <button
            className="link"
            onMouseDown={e => e.preventDefault()}
            onClick={e => {
              e.preventDefault()
              setShowMessage(showMessage => !showMessage)
            }}
          >
            {showMessage ? 'Close message' : 'Add message (optional)'}
          </button>
          <motion.div
            transition={easings.default}
            initial={{ pointerEvents: 'none', opacity: 0, y: 50, height: 0 }}
            animate={
              showMessage
                ? { pointerEvents: 'auto', opacity: 1, y: 0, height: 'auto' }
                : { opacity: 0, y: 50, height: 0 }
            }
          >
            <StyledTextarea
              as={Input}
              register={register}
              name="name"
              type="textarea"
              placeholder="Your message"
            />
          </motion.div>
        </FormBlock>
        <FormBlock>
          <Button
            type="submit"
            disabled={success.status || Object.keys(errors).length > 0}
          >
            {!isSubmitting && (!success.status || !isValid) && 'Submit'}
            {isSubmitting && <span>Submitting</span>}
            {isSubmitted &&
              isValid &&
              success.status &&
              `You're all signed up, ${getValues('fullName')}!`}
            {!success.status && success.message}
          </Button>
        </FormBlock>
      </Stagger>
    </form>
  )
}

// const AnimatedDots = () => {
//   const [count, setCount] = React.useState(1)
//   useInterval(() => {
//     setCount(count => count + 1)
//   }, 1000)
//   console.log(count, count % 3)
//   return (
//     <span>
//       hello
//       {count % 3 === 0 && <span>.</span>}
//       {count % 3 === 1 && <span>.</span>}
//       {count % 3 === 2 && <span>.</span>}
//     </span>
//   )
// }

export default styled(Newsletter)(({ theme }) => css``)
