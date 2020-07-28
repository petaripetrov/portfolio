import React from "react"

import Layout from "../components/elements/layout"
import SEO from "../components/seo"
import Name from "../components/elements/name"
import TextBox from "../components/elements/textBox"
import IconsCarrosel from "../components/elements/iconsCarrosel"


const IndexPage = () => (
  <Layout>
    <SEO title="board" />
    <Name />
    <IconsCarrosel />
    <TextBox />
  </Layout>
)

export default IndexPage
