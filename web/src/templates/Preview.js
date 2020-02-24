import React, { useState, useEffect, useRef, useContext } from 'react'
import sanityClient from '@sanity/client'
import { Helmet } from 'react-helmet'
import styled, { css, ThemeProvider } from 'styled-components'
import theme from '../styles/themes'

import Layout from '../components/Layout'
import { TemplateResolver } from '../components/resolvers'
import AppContext from '../components/context/AppContext'

const client = sanityClient({
  projectId: '6ptaspv6',
  dataset: 'production',
  useCdn: false,
  withCredentials: true
})

// Get draft if it exists, fall back to published page
// Unfortunatly we need to resolve references manually, unlike graphql
const SanityQuery = `*[_id in [$draftId, $id]]{
    authors[]{
      person->,
      ...
    },
    pagebuilder {
      sections[]{
        seeAllLink {
          reference->{slug, title},
          ...
        },
        cardsList[]{
          content->{...},
          ...
        },
        ...
      },
      ...
    },
    ...
  } | order(_updatedAt desc)`

const generateTheme = document => {
  // Merging themes with default for missing values
  const res = {
    colors: { ...theme.colors, ...document.colors },
    spacingUnit: { ...theme.spacingUnit, ...document.spacingUnits },
    fonts: {
      ...theme.fonts,
      ...Object.keys(document.fonts).reduce((acc, key) => {
        acc[key] = () => css`
          font-size: ${document.fonts[key].fontSize};
          letter-spacing: ${document.fonts[key].letterSpacing};
        `
        return acc
      }, {})
    }
  }
  console.log('GENERATED THEME', res)
  return res
}

// Might be something to cathc from here:
// https://henrique.codes/gatsby-live-preview-sanity/

const Preview = ({ className, id }) => {
  // const [isUpdating, setIsUpdating] = useState(false)
  // const fetchCount = useRef(null)
  const fetchTimer = useRef(null)
  const [pageData, setPageData] = useState(null)
  const [size, setSize] = useState('full')

  const pageId = id ? id.replace('drafts.', '') : null
  const params = { draftId: `drafts.${pageId}`, id: pageId }
  const { actions } = useContext(AppContext)

  const startListening = () => {
    // Listen for changes in document structure
    client
      .listen(SanityQuery, params, { includeResult: false })
      .subscribe(update => {
        // Unfortunately {includeResult:true} does not resolve refs
        // so we need to fetch the full preview again
        // Prevent simultaneous requests with a timer
        // this also fixes latency issues from Sanity server
        if (fetchTimer.current) {
          clearTimeout(fetchTimer.current)
        }
        fetchTimer.current = setTimeout(fetchPreview, 2000)
      })
  }

  const fetchPreview = () => {
    console.log('Fetch data', params)
    client.fetch(SanityQuery, params).then(res => {
      console.log('Data fetched', res)
      if (res) {
        console.log('Set page data', res[0])
        setPageData(res[0])
        if (params.id === 'design') {
          actions.setTheme(generateTheme(res[0]))
        }
      }
    })
    // Do individual fetch if document is other than design
    if (params.id !== 'design') {
      client
        .fetch(SanityQuery, { draftId: `drafts.design`, id: 'design' })
        .then(res => {
          console.log('Theme Data fetched', res)
          if (res) {
            console.log('Set theme data', res[0])
            actions.setTheme(generateTheme(res[0]))
          }
        })
    }
  }

  const initFetching = () => {
    if (!id) {
      console.log('no id specified')
      return
    }

    fetchPreview()

    console.log('Start listening')
    startListening()
  }

  useEffect(initFetching, [])

  console.log('TCL: Preview -> pageData', pageData)
  return (
    <div className={className}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="Preview">
        <div className="Preview__content">
          {pageData && (
            <Layout>
              <TemplateResolver data={pageData} />
            </Layout>
          )}
        </div>
      </div>
    </div>
  )
}

export default styled(Preview)(({ theme }) => css``)
