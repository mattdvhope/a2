import React, { useState, useEffect, useRef } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetInitialVideosAbove = (data) => {
  const initVidAbvRef = useRef(null)

  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [initialVideosAbove, setInitialVideosAbove] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesAbove = edgesArray.filter(obj => obj.node.order < orderOfInitialVideo);
  const edAbvSorted = edgesAbove.sort((a,b) => a.node.order - b.node.order)
  const oneAbove = edAbvSorted.slice(-1);

  useEffect(() => {
    setInitialVideosAbove(() => 
      <div className="site-container blog-post">
        {oneAbove
          .map(({ node }, i) => (
            <div key={i} className="container" style={{ marginTop: `-3em` }} ref={initVidAbvRef}>
              <YoutubeHolder data={node} />
            </div>
          )
        )}
      </div>
    )
  }, []);

  return [initialVideosAbove, setInitialVideosAbove, initVidAbvRef];

};

export default SetInitialVideosAbove;