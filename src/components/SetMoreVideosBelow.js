import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"
import UnderLastVideo from "./UnderLastVideo"

const SetMoreVideosBelow = (data) => {
  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [moreVideosBelow, setMoreVideosBelow] = useState(null);
  const edgesArray = data.allContentfulBlogs.edges;
  const edgesBelow = edgesArray.filter(obj => obj.node.order > orderOfInitialVideo);
  const edBlwSorted = edgesBelow.sort((a,b) => a.node.order - b.node.order)
  edBlwSorted.shift(1);
  const lastVideoPost = edBlwSorted[edBlwSorted.length - 1];

  useLayoutEffect(() => {
    if (edBlwSorted) { // in case there are no more videos below
      setMoreVideosBelow(() => 
        <div className="site-container blog-post">
          {edBlwSorted
            .map(({ node }, i) => {
              if (node.id !== lastVideoPost.node.id) {
                return (
                  <div key={i} className="container">
                    <YoutubeHolder data={node} />
                    <br/><br/><br/><br/>
                  </div>
                )
              } else {
                return (
                  <div key={i} className="container">
                    <YoutubeHolder data={node} />
                    {UnderLastVideo()}
                  </div>
                )
              }
            } // map
          )}
        </div>
      )
    }
  }, []);

  return [moreVideosBelow, setMoreVideosBelow];

};

export default SetMoreVideosBelow;