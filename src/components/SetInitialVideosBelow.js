import React, { useState, useEffect, useRef } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"
import UnderLastVideo from "./UnderLastVideo"

const SetInitialVideosBelow = (data) => {
  const initVidBlwRef = useRef(null);

  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [initialVideosBelow, setInitialVideosBelow] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesBelow = edgesArray.filter(obj => obj.node.order > orderOfInitialVideo);
  const edBlwSorted = edgesBelow.sort((a,b) => a.node.order - b.node.order)
  const oneBelow = edBlwSorted.slice(0, 1);

  useEffect(() => {
    setInitialVideosBelow(() =>
      <div className="site-container blog-post">
        {oneBelow
          .map(({ node }, i) => {
            if (edgesBelow.length !== 1) {
              return (
                <div key={i} className="container this-eol" ref={initVidBlwRef}>
                  <YoutubeHolder data={node} />
                </div>
              )
            } else { // Providing scrolling warning user last video
              return (
                <div key={i} className="container this-eol" ref={initVidBlwRef}>
                  <YoutubeHolder data={node} />
                  {UnderLastVideo()}
                </div>
              )
            }
          } // map
        )}
      </div>
    ) // setInitialVideosBelow
  }, []);

  return [initialVideosBelow, setInitialVideosBelow, initVidBlwRef];

};

export default SetInitialVideosBelow;