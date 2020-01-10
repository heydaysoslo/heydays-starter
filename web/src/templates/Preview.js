import React, { useState, useEffect } from 'react'
import sanityClient from '@sanity/client'

import Layout from '../components/Layout'
import Container from '../components/Container'
import PageBuilder from '../components/pagebuilder/Pagebuilder'

const client = sanityClient({
  projectId: '6ptaspv6',
  dataset: 'production',
  useCdn: false,
  withCredentials: true
})

const Preview = props => {
  // Sample id = drafts.ead4f570-86ae-4de0-9ac5-58e07045e861

  const [refreshCount, setRefreshCount] = useState(0)
  const [pageData, setPageData] = useState({})

  const query = `*[_id == $id][0]`
  const params = { id: props.id }

  const fetchPreview = () => {
    client.fetch(query, params).then(setPageData)
  }

  const refreshData = () => {
    setRefreshCount(refreshCount + 1)
  }

  const heartBeat = () => {}

  useEffect(fetchPreview, [refreshCount])

  return (
    <Layout>
      <Container>
        <h1>Preview</h1>
        <button className="Button" onClick={refreshData}>
          Update data
        </button>
        <p>Load a page with id: {props.id}</p>
        {pageData.pagebuilder && pageData.pagebuilder.sections && (
          <PageBuilder sections={pageData.pagebuilder.sections} />
        )}
      </Container>
    </Layout>
  )
}

export default Preview
