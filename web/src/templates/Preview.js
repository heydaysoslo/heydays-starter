import React, { useState, useEffect } from 'react'
import sanityClient from '@sanity/client'

// import Layout from '../components/Layout'
import Container from '../components/Container'
import TemplateResolver from '../components/TemplateResolver'

const client = sanityClient({
  projectId: '6ptaspv6',
  dataset: 'production',
  useCdn: false,
  withCredentials: true
})

const Preview = props => {
  const [refreshCount, setRefreshCount] = useState(0)
  const [pageData, setPageData] = useState({})

  // Get draft if it exists, fall back to published page
  // Unfortunatly we need to resolve references manually, unlike graphql
  const query = `*[_id in [$draftId, $id]]{
    authors[]{
      person->,
      ...
    },
    ...
  } | order(_updatedAt desc)`
  const params = { draftId: `drafts.${props.id}`, id: props.id }

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

  const refreshData = () => {
    setRefreshCount(refreshCount + 1)
  }

  useEffect(fetchPreview, [refreshCount])

  if (!window) {
    return <div>Loading preview</div>
  }

  return (
    <div>
      <div className="Preview">
        <div className="Preview__header">
          <Container>
            <span>👀Preview</span>
            <button className="Button" onClick={refreshData}>
              🔁Refresh
            </button>
            {/* <p>Load a page with id: {props.id}</p> */}
            {/* <pre>{JSON.stringify(pageData, null, 2)}</pre> */}
            {/* {pageData.pagebuilder && pageData.pagebuilder.sections && (
            <PageBuilder sections={pageData.pagebuilder.sections} />
          )} */}
          </Container>
        </div>
        <div className="Preview__content">
          {pageData && <TemplateResolver data={pageData} />}
        </div>
      </div>
    </div>
  )
}

export default Preview
