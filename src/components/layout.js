import * as React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css";
import Helmet from "react-helmet";

import Header from "./header"
// import Footer from "./footer";
import "./layout.css"
import "../css/style.css";

const Layout = ({ children, header }) => {

  

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulHomePage {
            siteName
            siteDescription
            logo {
              file {
                url
              }
            }
            menus
          }
        }
      `}
      
      render={data => (  
        <>
          <Helmet>
            <script async defer
              crossorigin="anonymous"
              src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v10.0&appId=611958516129057&autoLogAppEvents=1"
              nonce="PFVZXkQp"
            />
            <meta name="facebook-domain-verification" content="mixactgwu5xh59m0q0ueqlj6zuanrj" />
          </Helmet>

          <Header
            data={data.contentfulHomePage}
            siteTitle={data.contentfulHomePage.siteName}
            header={header}
          />
          <div>
            <main id="home">{children}</main>
          </div>
        </>
      )}
    />
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
