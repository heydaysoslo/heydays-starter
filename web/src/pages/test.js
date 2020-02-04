import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'

import { mapEdgesToNode } from '../utils/sanityHelpers'
import Container from '../components/Container'
import Modal from '../components/Modal'
import AspectContainer from '../components/AspectContainer'
import useWindowSize from '../components/hooks/useWindowSize'
import useMediaQuery from '../components/hooks/useMediaQuery'
import useScroll from '../components/hooks/useScroll'
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import FadeIn from '../components/FadeIn'
import Layout from '../components/Layout'
import AppContext from '../components/context/AppContext'
import useFetch from '../components/hooks/useFetch'
import Icon from '../components/Icon'
import { createTints, createMixColorSteps } from '../styles/utilities'
import { Select, Button } from '../components/elements'
import styled, { css } from 'styled-components'
import Test from '../components/Test'

const query = graphql`
  {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allSanityPage {
      edges {
        node {
          _key
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const Index = () => {
  const data = useStaticQuery(query)
  const media = useMediaQuery()
  const windowSize = useWindowSize({ debounce: 100 })
  const scroll = useScroll({ delay: 100 })
  const { response, error, isLoading } = useFetch(`https://api.kanye.rest`)
  const [select, setSelect] = useState(null)

  const { state, actions } = useContext(AppContext)

  // console.log(mapEdgesToNode(data.allSanityPage))

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const TestSpacing = styled.div(
    ({ theme }) => css`
      ${theme.spacing.xs('my')}
    `
  )

  return (
    <Layout>
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
          {response && <pre>{JSON.stringify(response)}</pre>}
          {error && <p>Kanye Rest error: {JSON.stringify(error)}</p>}
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
        {/*
        <Image
          aspect={{ sm: 'portrait', md: 'portrait', lg: 'landscape' }}
          data={data.allFile.edges[1].node.childImageSharp}
        />*/}
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
        {/* <div
          style={{
            maxWidth: '400px',
            backgroundColor: data.allFile.edges[1].node.colors.vibrant,
            padding: '2rem'
          }}
        >
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div> */}
        <pre>{JSON.stringify(media, null, 2)}</pre>
        <pre>{JSON.stringify(windowSize, null, 2)}</pre>
        <pre>{JSON.stringify(scroll, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default Index
