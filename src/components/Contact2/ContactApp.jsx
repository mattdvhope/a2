import React from "react";
import Contact from "./ContactComponents/Contact";

function ContactApp({ pageType }) {
  return (
    <Contact
      pageType={pageType}
      title={pageType === "contact" ? "ติดต่อเรา" : "เกี่ยวกับเรา"}
      text1={pageType === "contact" ? "มาแชทกับเรา! เราต้องการได้ยินจากคุณ!" : "เราได้สร้างพื้นที่เว็บสำหรับผู้ที่ต้องการเรียนรู้เพิ่มเติมเกี่ยวกับพระเยซูคริสต์"}
      messengerLogo="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/messenger@2x.png"
      chat="แชท"
      facebookCircularLogo="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/facebook-circular-logo@2x.png"
      followUs="ติดตามเรา"
    />
  );
}

export default ContactApp;
