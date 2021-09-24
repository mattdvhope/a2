import React from "react"

const YoutubeVideo = ({src, title}) => {
	return (
		<iframe // Youtube video 
      id="FrameHolder"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        height: `49vw`,
        width: `81vw`,
        outline: `0.3rem solid #EEEBEB`,
      }}
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  )
}

export default YoutubeVideo
