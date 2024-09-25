import React from 'react'
import Title from './Title'
import MyWork from './MyWork'

export default function MyWorkWrapper() {
  return (
    <section class="project" id="project">
          <Title title="My Works"/>
          <div class="works-container">
            <MyWork valuePortfolio ="Portfolio1"/>
            <MyWork valuePortfolio ="Portfolio2"/>
            <MyWork valuePortfolio ="Portfolio3"/>
            <MyWork valuePortfolio ="Portfolio4"/>
            <MyWork valuePortfolio ="Portfolio5"/>
            <MyWork valuePortfolio ="Portfolio6"/>
            
          </div>
        </section>
  )
}
