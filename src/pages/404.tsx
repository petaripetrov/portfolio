import React from "react"

import Layout from "../components/elements/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not found.</h1>
    <p>You have drifted too far away! You might want to go <a href="https://petaripetrov.eu">home.</a></p>
  </Layout>
)

export default NotFoundPage
