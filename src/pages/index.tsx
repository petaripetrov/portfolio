import React from "react"

import Layout from "../components/elements/layout"
import SEO from "../components/seo"
import Name from "../components/elements/name"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Name />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
