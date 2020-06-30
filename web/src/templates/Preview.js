import React, { useState, useEffect, useRef } from 'react'
import sanityClient from '@sanity/client'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'

import Layout from '../components/Layout'
import { TemplateResolver } from '../components/resolvers'
import { sanity } from '../../heydays-config'

const client = sanityClient({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
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

// Might be something to cathc from here:
// https://henrique.codes/gatsby-live-preview-sanity/

const Preview = ({ className, id }) => {
  // const [isUpdating, setIsUpdating] = useState(false)
  // const fetchCount = useRef(null)
  const fetchTimer = useRef(null)
  const [pageData, setPageData] = useState(null)

  const pageId = id ? id.replace('drafts.', '') : null
  const params = { draftId: `drafts.${pageId}`, id: pageId }

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
      }
    })
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

  return (
    <div className={className}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="Preview">
        <div className="Preview__content">
          {pageData && (
            <Layout>
              <TemplateResolver page={pageData} />
            </Layout>
          )}
        </div>
      </div>
    </div>
  )
}

export default styled(Preview)(({ theme }) => css``)
