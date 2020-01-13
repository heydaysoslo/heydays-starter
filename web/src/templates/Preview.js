import React, { useState, useEffect, useRef } from 'react'
import sanityClient from '@sanity/client'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Container from '../components/Container'
import TemplateResolver from '../components/TemplateResolver'

const client = sanityClient({
  projectId: '6ptaspv6',
  dataset: 'production',
  useCdn: false,
  withCredentials: true
})

// Might be something to cathc from here:
// https://henrique.codes/gatsby-live-preview-sanity/

const Preview = props => {
  // const [isUpdating, setIsUpdating] = useState(false)
  // const fetchCount = useRef(null)
  const fetchTimer = useRef(null)
  const [pageData, setPageData] = useState(null)
  const [size, setSize] = useState('full')

  // Get draft if it exists, fall back to published page
  // Unfortunatly we need to resolve references manually, unlike graphql
  const query = `*[_id in [$draftId, $id]]{
    authors[]{
      person->,
      ...
    },
    pagebuilder {
      sections[]{
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

  const pageId = props.id ? props.id.replace('drafts.', '') : null
  const params = { draftId: `drafts.${pageId}`, id: pageId }

  const startListening = () => {
    // Listen for changes in document structure
    client.listen(query, params, { includeResult: false }).subscribe(update => {
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
    client.fetch(query, params).then(res => {
      console.log('Data fetched', res)
      if (res) {
        console.log('Set page data', res[0])
        setPageData(res[0])
      }
    })
  }

  const initFetching = () => {
    if (!props.id) {
      console.log('no id specified')
      return
    }

    fetchPreview()

    console.log('Start listening')
    startListening()
  }

  useEffect(initFetching, [])

  const sizes = {
    full: '100%',
    mobile: '375px',
    tablet: '768px',
    laptop: '1200px'
  }

  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="Preview">
        <div className="Preview__header">
          <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                <span role="img" aria-label="eyes">
                  👀
                </span>{' '}
                Preview
              </span>
              <label className="SizeSwitcher" htmlFor="size">
                Select size:&nbsp;&nbsp;
                <select
                  className="SizeSwitcher__select"
                  name="size"
                  id="size"
                  onChange={e => setSize(e.target.value)}
                  value={size}
                >
                  {Object.keys(sizes).map(size => (
                    <option value={size} key={`size-${size}`}>
                      {size.substr(0, 1).toUpperCase()}
                      {size.substr(1, size.length)}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 10 10"
                  className="SizeSwitcher__icon"
                  aria-label="downward arrow"
                >
                  <path d="M0 2 L5 8 L10 2" stroke="black" fill="none" />
                </svg>
              </label>
            </div>
          </Container>
        </div>
        <div className="Preview__content">
          {pageData && (
            <div
              style={{
                width: sizes[size],
                border: size === 'full' ? 'none' : '1px solid black',
                margin: '0 auto',
                transition: 'width .3s ease'
              }}
            >
              <Layout>
                <TemplateResolver data={pageData} />
              </Layout>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
