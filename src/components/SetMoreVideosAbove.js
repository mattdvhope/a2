import React, { useState, useLayoutEffect } from "react";
import YoutubeHolder from "../templates/YoutubeHolder"

const SetMoreVideosAbove = (data) => {
  const orderOfInitialVideo = data.contentfulBlogs.order;
  const [moreVideosAbove, setMoreVideosAbove] = useState(null);

  const edgesArray = data.allContentfulBlogs.edges;
  const edgesAbove = edgesArray.filter(obj => obj.node.order < orderOfInitialVideo);
  const edAbvSorted = edgesAbove.sort((a,b) => a.node.order - b.node.order)
  edAbvSorted.pop();

  useLayoutEffect(() => {
    if (edAbvSorted) { // in case there are no more videos above
      setMoreVideosAbove(() => 
        <div className="site-container blog-post">
          {edAbvSorted
            .map(({ node }, i) => (
              <div key={i} className="container">
                <YoutubeHolder data={node} />
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            )
          )}
        </div>
      )
    }
  }, []);

  return [moreVideosAbove, setMoreVideosAbove];

};

export default SetMoreVideosAbove;