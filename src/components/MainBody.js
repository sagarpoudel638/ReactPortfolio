import React from 'react'
import Intro from './Intro'
import Banner from './Banner'
import IconsWrapper from './IconsWrapper'
import MyWorkWrapper from './MyWorkWrapper'
import AboutMeWrapper from './AboutMeWrapper'
import Contact from './Contact'

export default function MainBody() {
  return (
    <div className='mainbodywrapper'>
        <Intro/>
<Banner/>
<IconsWrapper/>
<MyWorkWrapper/>
<AboutMeWrapper/>
<Contact/>
    </div>
  )
}
