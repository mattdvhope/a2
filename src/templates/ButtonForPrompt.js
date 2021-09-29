import React from "react"

const ButtonForPrompt = ({onClick, buttonWords}) => {
	return (
		<button
      id="button-for-youtube-survey"
      type="button"
      className="btn btn-outline-success"
      style={{ color: `#0E1A36`, borderColor: `#00C185`, backgroundColor: `#00C185`, width: `13em` }}
      onClick={onClick}
    >
      {buttonWords}
    </button>
  )
}

export default ButtonForPrompt
