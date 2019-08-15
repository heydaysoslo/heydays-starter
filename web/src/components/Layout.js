import React from 'react'

// import GraphQLErrorList from './GraphQLErrorList'

import Header from './Header'
import Footer from './Footer'

const Layout = props => {
  // if (props.errors) {
  //   return <GraphQLErrorList errors={props.errors} />
  // }
  return (
    <>
      {/* <SEO
          type={props._type}
          slug={(props.slug && props.slug.current) || ''}
          seo={props.seo}
          title={props.title}
        /> */}
      <div className="Page">
        <Header />
        <div className="Page__content">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
