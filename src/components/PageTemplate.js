import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"
import ContactApp from "./Contact2/ContactApp"

const PageTemplate = ({ header, title, pageType }) => {
  return (
  <Layout header={header}>
    <Seo title={title} />
    <ContactApp pageType={pageType} />
  </Layout>
  )
}

export default PageTemplate