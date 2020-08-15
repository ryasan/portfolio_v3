import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Navbar />
    <Hero />
  </Layout>
)

export default IndexPage
