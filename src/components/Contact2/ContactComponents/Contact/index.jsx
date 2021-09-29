import React from "react";
import "./Contact.css";
import "../../../Contact2/globals.css";
import "../../../Contact2/styleguide.css";

function Contact(props) {
  const { pageType, title, text1, messengerLogo, chat, facebookCircularLogo, followUs } = props;
  
  // Add "https://web.facebook.com/relationshipsthailand" for desktops!!!!

  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <div className="overlap-group">
          <img
            className="vector"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/vector@1x.svg"
          />
          <img
            className="big-dark-rectangle"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-1@1x.svg"
          />
          <img
            className="rectangle-37"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-37@2x.svg"
          />
          <img
            className="rectangle-48"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-48@2x.svg"
          />
          <img
            className="rectangle-38"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-38@2x.svg"
          />
          <img
            className="rectangle-47"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-47@2x.svg"
          />
          <img
            className="rectangle-46"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/rectangle-46@2x.svg"
          />
          <img
            className="rectangle-42"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-42@2x.svg"
          />
          <img
            className="rectangle-39"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-39@2x.svg"
          />
          <img
            className="rectangle-49"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-49@2x.svg"
          />
          <img
            className="rectangle-45"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/rectangle-45@2x.svg"
          />
          <img
            className="rectangle-44"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-44@2x.svg"
          />
          <img
            className="rectangle-40"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-40@2x.svg"
          />
          <img
            className="rectangle-43"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-43@2x.svg"
          />
          <img
            className="rectangle-41"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/rectangle-41@2x.svg"
          />
          <img
            className="rectangle-51"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-51@2x.svg"
          />
          <img className="group-5" src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392a07173bee6db2de22b4/img/group-5-1@2x.png" />
          <img
            className="green-rectangle"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/green-rectangle@1x.svg"
          />
          <h1 className="title notosans-bold-white-26px">{title}</h1>
          <div className="text-1">{text1}</div>

          <a href="http://m.me/relationshipsthailand"><img className="messengerLogo" src={messengerLogo} /></a>
          <a href="http://m.me/relationshipsthailand"><div className="chat">{chat}</div></a>
          {/*<a href="fb://profile/?id=106619367753772"><img className="facebook-circular-logo" src={facebookCircularLogo} /></a>*/}
          {/*<a href="fb://profile/?id=106619367753772"><div className="follow-us">{followUs}</div></a>*/}

        </div>
      </div>
    </div>
  );
}

export default Contact;
