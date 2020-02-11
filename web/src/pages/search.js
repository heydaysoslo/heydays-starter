import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SearchResults from '../components/search/SearchResults'
import SearchForm from '../components/search/SearchForm'

// https://assortment.io/posts/gatsby-site-search-lunr-js

const Search = ({ data, location }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get('keywords') || ''

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])
        setResults(posts)
      })
    }
  }, [location.search])

  return (
    <Layout>
      Search page!
      <SearchForm query={searchQuery} />
      <SearchResults query={searchQuery} results={results} />
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </Layout>
  )
}

export default Search
