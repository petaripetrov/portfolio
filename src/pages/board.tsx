import React from "react"

import Layout from "../components/elements/layout"
import SEO from "../components/seo"
import Name from "../components/elements/name"
import TextBox from "../components/elements/textBox"


const IndexPage = () => (
  <Layout>
    <SEO title="board" />
    <Name />
    <TextBox />
  </Layout>
)

export default IndexPage