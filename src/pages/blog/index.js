import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

const IndexPage = () => (
  <Layout>    
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>This is a static blog site.</p>    
    <Link to="/blog/about/">About</Link> <br />
    <Link to="/blog/article-one/">Article One</Link> <br />
    <Link to="/blog/article-two/">Artice Two</Link> <br />
    <Link to="/blog/article-three/">Article Three</Link> <br /> <br />
  </Layout>
)

export default IndexPage