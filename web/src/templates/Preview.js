import React, { useState, useEffect } from 'react'
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
  // const [refreshCount, setRefreshCount] = useState(0)
  const [pageData, setPageData] = useState(null)

  const fetchPreview = () => {
    if (!props.id) {
      console.log('no id specified')
      return
    }
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
    const params = { draftId: `drafts.${props.id}`, id: props.id }
    console.log('Fetch data', params)
    client.fetch(query, params).then(res => {
      console.log('Data fetched', res)
      if (res) {
        console.log('Set page data', res[0])
        setPageData(res[0])
        // Start listening
        client.listen(query, params).subscribe(update => {
          if (update.result) {
            // There's a bug with reference resolving on the listener
            // Add some kind of merge logic to prevent updating the references in full
            console.log('Live update page data', update.result)
            setPageData(update.result)
          }
        })
      }
    })
  }

  useEffect(fetchPreview, [])

  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="Preview">
        <div className="Preview__header">
          <Container>
            <span>
              <span role="img" aria-label="eyes">
                👀
              </span>{' '}
              Preview
            </span>
            {/* <p>Load a page with id: {props.id}</p> */}
            {/* <pre>{JSON.stringify(pageData, null, 2)}</pre> */}
            {/* {pageData.pagebuilder && pageData.pagebuilder.sections && (
            <PageBuilder sections={pageData.pagebuilder.sections} />
          )} */}
          </Container>
        </div>
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

export default Preview
