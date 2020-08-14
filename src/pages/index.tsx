import React from "react"

import Layout from "../components/elements/layout"
import SEO from "../components/seo"
import TextBox from "../components/elements/textBox"
import Name from "../components/elements/name"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Name />
    <TextBox />
  </Layout>
)

export default IndexPage
