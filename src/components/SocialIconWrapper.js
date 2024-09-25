import React from 'react'
import Icons from './Icons'

export default function SocialIconWrapper() {
  return (
    <div className="social-icons">
        <a href="https://www.facebook.com/sagarpoudel638" 
              ><Icons iconName="facebookIcon"/>
            </a>
            <a href="https://github.com/sagarpoudel638" 
              ><Icons iconName="githubIcon"/>
            </a>
            <a
              href="https://www.linkedin.com/in/sagarpoudel638/"
              ><Icons iconName="linkedinIcon"/></a>
    </div>
  )
}
