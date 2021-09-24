import React, { useState, useEffect, useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./BlogPost.css";
// import SetInitialVideosAbove from "../components/SetInitialVideosAbove";
// import SetInitialVideosBelow from "../components/SetInitialVideosBelow";
// import SetMoreVideosAbove from "../components/SetMoreVideosAbove";
// import SetMoreVideosBelow from "../components/SetMoreVideosBelow";
// import UnderLastVideo from "../components/UnderLastVideo"
import YoutubeHolder from "./YoutubeHolder"
// import SetFirstVideoPosition from "../utils/SetFirstVideoPosition";
// import RetainPosOrJumpToTop from "../utils/RetainPosOrJumpToTop";
// import useInfiniteScroll from "../utils/useInfiniteScroll"; // custom Hook
// import { ScrollToSmoothly } from "../utils/ScrollToSmoothly";
// import { RemoveCookies } from "../utils/RemoveCookies";

const BlogPost = ({ data }) => {

  // // 0. Remove all cookies, etc
  // useEffect(() => {
  //   RemoveCookies()
  // }, []); // useEffect

  // // 1. Set position of first video, which is arrived at via the URL suffix & auto-scrolled to from the top of 'initialVideosAbove'
  // const firstVideoRef = useRef(null);
  // SetFirstVideoPosition(firstVideoRef, data.contentfulBlogs.slug);

  // // 2. Set 'initial' videos above and below the first video
  // const [initialVideosAbove, setInitialVideosAbove, initVidAbvRef] = SetInitialVideosAbove(data);
  // const [initialVideosBelow, setInitialVideosBelow, initVidBlwRef] = SetInitialVideosBelow(data);

  // // 3a. Set infinite scrolling. Scrolling wkll create 'more' videos (from BlogPost.js) above & below
  // const [isFetching, setIsFetching] = useInfiniteScroll(elementsFromScrolling);
  // const [moreVideosAbove, setMoreVideosAbove] = SetMoreVideosAbove(data);
  // const [moreVideosBelow, setMoreVideosBelow] = SetMoreVideosBelow(data);
  
  // // 3b. Actually attach these new components to the DOM
  // const [moreVidsAbv, setMoreVidsAbv] = useState(null);
  // const [moreVidsBlw, setMoreVidsBlw] = useState(null);

  // // 4. Obtain number of videos below to know when to jump to the top AND whether to add UnderLastVideo() elements.
  // const numberOfInitVidsBelow = initialVideosBelow ? initialVideosBelow.props.children.length : null
  // const numberOfMoreVidsBelow = moreVideosBelow ? moreVideosBelow.props.children.length : null
  // const numberOfVideosBelow = numberOfInitVidsBelow + numberOfMoreVidsBelow;

  // function elementsFromScrolling() {
  //   const myPromise = new Promise((resolve, reject) => {
  //     resolve();
  //   });
  //   myPromise
  //   .then(res => !moreVidsAbv ? setMoreVidsAbv(moreVideosAbove) : null)
  //   .then(res => !moreVidsBlw ? setMoreVidsBlw(moreVideosBelow) : null)
  //   .then(res => {
  //     const numMoreVidsAbv = moreVidsAbv ? moreVidsAbv.props.children.length : null;
  //     const numMoreVidsBlw = moreVidsBlw ? moreVidsBlw.props.children.length : null;
  //     const totalMoreVids = numMoreVidsAbv + numMoreVidsBlw;
  //     RetainPosOrJumpToTop(initVidBlwRef, numberOfVideosBelow, totalMoreVids);
  //   })
  //   .then(res => setIsFetching(false))
  //   .catch(err => console.log("error: ", err));
  // }

  return (
    <Layout header="feed">
      <SEO title="วีดีโอ" />
      <div className="container graphics">
        {/*{moreVidsAbv}*/}
        {/*{initialVideosAbove}*/}
        {/*<div className="site-container blog-post" ref={firstVideoRef}>*/}
        <div className="site-container blog-post" >
          <YoutubeHolder data={data.contentfulBlogs}/>
          {/*{numberOfVideosBelow === 0 ? UnderLastVideo() : null}*/}
        </div>
        {/*{initialVideosBelow}*/}
        {/*{moreVidsBlw}*/}
      </div>
    </Layout>
  )
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogs(slug: {eq: $slug}) {
      id
      title
      slug
      order
      ctaFirst
      youtubeUrl
      description {
        description
      }
      featureImage {
        fluid {
          src
        }
      }
      promptsForResponse {
        promptSlug
        promptContent {
          promptContent
        }
        buttonInvitation
      }
    }

    contentfulHomePage {
      siteUrl
    }

    allContentfulBlogs {
      edges {
        node {
          id
          title
          slug
          order
          ctaFirst
          youtubeUrl
          description {
            description
          }
          featureImage {
            fluid {
              src
            }
          }
          promptsForResponse {
            promptSlug
            promptContent {
              promptContent
            }
            buttonInvitation
          }
        }
      }
    }


  }
`;
