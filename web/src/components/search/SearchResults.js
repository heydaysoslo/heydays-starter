import React from 'react'

const SearchResults = ({ results, query }) => (
  <section aria-label="Search results">
    {!!results.length && query && (
      <h2 id="search-results-count" aria-live="assertive">
        Found {results.length} posts on "{query}"
      </h2>
    )}
    {!!results.length && (
      <ol>
        {results.map(({ title, url, date, description }) => (
          <li key={title}>
            <h3>
              <a href={url}>{title}</a>
            </h3>
            <small>{new Date(date).toLocaleString('en-GB')}</small>
            {description && <p>{description}</p>}
          </li>
        ))}
      </ol>
    )}
  </section>
)

export default SearchResults
