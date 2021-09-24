import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ data, header }) => {
  const [menu, setMenu] = useState(false);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    setSlug(window.sessionStorage.getItem('slug'));
  }, []);

  return (
    <header className={`site-header ${menu ? "active" : ""}`}>
      <div className="container">
        <div className="header-main">
          <div className="logo">
            <Link to={`/${slug ? slug : "eating-the-fruit"}`}>
              {data.logo.file.url ? (
                <img src="https://anima-uploads.s3.amazonaws.com/projects/61396280e87edf415321009d/releases/61396958bfe3e5336623d201/img/birds-no-bkgd@2x.svg" alt="logo" height="55vh" style={{ position: `absolute`, top: `7px` }}/>
              ) : (
                <span>{data.siteName}</span>
              )}
            </Link>
          </div>
          <div
            className="responsive-menu"
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <span></span>
          </div>
          {header === "feed" ? (
            <div className="menu">
              <ul
                onClick={() => {
                  setMenu(false)
                }}
              >

                {data.menus
                  .filter(item => item === "Contact")
                  .map(t => {
                    {/*console.log(t);*/}
                    return (
                      <li key={t} >
                        <Link to={`/contact`}>ติดต่อเรา</Link>
                      </li>
                    );
                  })}

                {data.menus
                  .filter(item => item === "About")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/about`}>เกี่ยวกับเรา</Link>
                      </li>
                    );
                  })}

              </ul>
            </div>
          ) : (
            <div className="menu">
              <ul
                onClick={() => {
                  setMenu(false)
                }}
              >

                {data.menus
                .filter(item => item === "Blogs")
                .map(t => {
                  return (
                    <li key={t}>
                      <Link to={`/${slug ? slug : "eating-the-fruit"}`}>วิดีโอ</Link>
                    </li>
                  );
                })}

                {data.menus
                .filter(item => item === "Contact")
                .map(t => {
                  return (
                    <li key={t} >
                      <Link to={`/contact`}>ติดต่อเรา</Link>
                    </li>
                  );
                })}

                {data.menus
                .filter(item => item === "About")
                .map(t => {
                  return (
                    <li key={t} >
                      <Link to={`/about`}>เกี่ยวกับเรา</Link>
                    </li>
                  );
                })}

              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
