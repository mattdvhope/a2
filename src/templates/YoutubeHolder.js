import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { fbq } from '@hutsoninc/gatsby-plugin-facebook-pixel';
import { youtubeEmbeddable } from "../utils/youtubeEmbeddable";
import YoutubeVideo from "./YoutubeVideo";
import ButtonForPrompt from "./ButtonForPrompt";

const YoutubeHolder = ({data}) => {
  const prompts = data.promptsForResponse;
  const [promptsElementNum, setPrompt] = useState(0);
  const buttonWords = prompts[promptsElementNum].buttonInvitation;

  // const scrollToTopOfBlog = () => window.innerWidth < 500 ? window.scrollTo(0, 0) : null

  const ButtonProvidedIfNeeded = () => {
    if (promptsElementNum === 0) {
      return (
        <div>
          <ButtonForPrompt
            onClick={() => {
              fbq('trackCustom', 'ClickedFirstButton'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              setPrompt(promptsElementNum + 1);
              // scrollToTopOfBlog();
            }}
            buttonWords={buttonWords} />
        </div>)
    } else if (promptsElementNum !== prompts.length-1) {
      return (
        <div>
          <h2 
            onClick={() => {
              setPrompt(promptsElementNum - 1);
              // scrollToTopOfBlog();
            }}
          >⬅️&nbsp;</h2>
          <ButtonForPrompt
            onClick={() => {
              fbq('trackCustom', 'ClickedNextButton'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              setPrompt(promptsElementNum + 1);
              // scrollToTopOfBlog();
            }}
            buttonWords={buttonWords} />
        </div>)
    } else if (promptsElementNum === prompts.length-1) {
      return (
        <div>
          <br/>
          <h1
            onClick={() => {
              setPrompt(promptsElementNum - 1);
              // scrollToTopOfBlog();
            }}
          >⬅️&nbsp;</h1>
        </div>)
    }
  }

  return (
    <div className="container-fluid">
      <div>
        <YoutubeVideo src={youtubeEmbeddable(data.youtubeUrl)} title={data.title} />
        <div
          dangerouslySetInnerHTML={{
            __html: prompts[promptsElementNum].promptContent.promptContent
          }}
        />
        {ButtonProvidedIfNeeded()}
      </div>
    </div>
  )

}

export default YoutubeHolder