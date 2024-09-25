import React from 'react'
import Title from './Title'
import SocialIconWrapper from './SocialIconWrapper'
import Icons from './Icons';

export default function Contact() {
    return (
      <section className="contact" id="contact">
          <Title title="GET IN TOUCH" />
          <SocialIconWrapper />
          <Title title="OR" />
          <a href="mailto:mailtosagarpoudel@gmail.com">
              <div className="email">
                <div className="content">MAILTOSAGARPOUDEL@GMAIL.COM</div>
                {/* <object
                  type="image/svg+xml"
                  data="assets/send.svg"
                  className="send"
                ></object> */}
                <Icons  className="send" style = {{height:"10px"}} iconName="sendIcon"/>
                
              </div>
          </a>
      </section>
    );
  }