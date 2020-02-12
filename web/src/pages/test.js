import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'

import useWindowSize from '../components/hooks/useWindowSize'
import useMediaQuery from '../components/hooks/useMediaQuery'
import useScroll from '../components/hooks/useScroll'
import FadeIn from '../components/FadeIn'
import Layout from '../components/Layout'
import AppContext from '../components/context/AppContext'
import useFetch from '../components/hooks/useFetch'
import { createTints, createMixColorSteps, spacing } from '../styles/utilities'
import {
  Select,
  Button,
  Container,
  Modal,
  AspectContainer,
  Icon
} from '../components/elements'
import styled, { css } from 'styled-components'
import Test from '../components/Test'
import Video from '../components/Video'

const Index = () => {
  const media = useMediaQuery()
  const windowSize = useWindowSize({ debounce: 100 })
  const scroll = useScroll({ delay: 100 })
  const { response, error, isLoading } = useFetch(`https://api.kanye.rest`)
  const {
    response: secondResponse,
    error: secondError,
    isLoading: secondIsLoading
  } = useFetch([
    {
      key: 'rss',
      url: `https://api.rss2json.com/v1/api.json?rss_url=`
    },
    {
      key: 'kanye',
      url: `https://api.kanye.rest`
    }
  ])
  const [select, setSelect] = useState(null)

  const { state, actions } = useContext(AppContext)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const TestSpacing = styled.div(
    ({ theme }) => css`
      ${spacing.xs('my')}
    `
  )

  return (
    <Layout>
      {/* <Video url="https://www.youtube.com/watch?v=lYGthBDzt8o" /> */}
      <Video url="https://www.youtube.com/watch?v=hHW1oY26kxQ" />
      <Video url="https://vimeo.com/390848060" />
      <Test />
      <Button modifiers="small">Click me</Button>
      <Button modifiers={['secondary', 'small']}>Click me</Button>
      <TestSpacing>Hei verden</TestSpacing>
      <Container>
        <Select
          options={options}
          onChange={(value, actions) => setSelect(value.value)}
          // defaultValue={options[0]}
          // defaultMenuIsOpen={true}
        />
        <p>{select ? `Selected: ${select}` : 'Nothing is selected yet'}</p>
        <Icon name="check" modifiers="small" />
        <Icon name="config" color="orange" />
        <Icon name="calendar" modifiers="large" />
        <Icon name="fullstack" modifiers="large" />
        <div style={{ display: 'flex' }}>
          {createTints('red', 5).map(color => (
            <div
              key={`tint-${color}`}
              style={{
                backgroundColor: color,
                height: '200px',
                width: '200px'
              }}
            ></div>
          ))}
          {createMixColorSteps('red', 'blue', 5).map(color => (
            <div
              key={`mixStep-${color}`}
              style={{
                backgroundColor: color,
                height: '200px',
                width: '200px'
              }}
            ></div>
          ))}
        </div>
        <h1>HomepageW in a user's site</h1>
        <Helmet>
          <title>Hello world</title>
        </Helmet>
        {state && (
          <button onClick={() => actions.toggleMenu()}>
            Context showMenu is {state.showMenu ? 'on' : 'off'}
          </button>
        )}
        <div style={{ border: '1px solid red', padding: '20px' }}>
          useFetch:
          {isLoading && <p>Kanye Rest is loading</p>}
          {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
          {error && <p>Kanye Rest error: {JSON.stringify(error)}</p>}
        </div>
        <div style={{ border: '1px solid red', padding: '20px' }}>
          useFetch:
          {secondIsLoading && <p>Waiting</p>}
          {response && <pre>{JSON.stringify(secondResponse, null, 2)}</pre>}
          {error && <p>Kanye Rest error: {JSON.stringify(secondError)}</p>}
        </div>
        <div style={{ maxWidth: '500px', border: '2px solid black' }}>
          <AspectContainer
            aspect={{
              sm: 'portrait',
              md: 'widescreen',
              lg: 'portrait',
              xl: 'panorama'
            }}
          >
            I'm the wolf
          </AspectContainer>
        </div>
        <Modal
          buttonText="Open modal"
          buttonType="primary"
          contentMaxWidth="80%"
          backdrop="rgba(0,0,0,.5)"
          animationWrapper={FadeIn}
          hideClose
        >
          {({ close, isOpen }) => (
            <>
              <button
                onClick={close}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                close
              </button>
              <h2>I'm modal</h2>
              <p>
                I'm some modal text Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Temporibus quasi delectus eaque veritatis
                ullam accusamus odio consectetur reiciendis atque alias!
              </p>
            </>
          )}
        </Modal>
        <pre>{JSON.stringify(media, null, 2)}</pre>
        <pre>{JSON.stringify(windowSize, null, 2)}</pre>
        <pre>{JSON.stringify(scroll, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default Index
