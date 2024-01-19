import React from 'react'
import './Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'

function Widgets() {

  const newsArticle = (heading, subtitle) => (

    <div className="widgets_article">

      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
      
    </div>
  )

  return (

    <div className='widgets'>

        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>

        {newsArticle("Raja is back", 'top news - 9999 readers')}
        {newsArticle("Raja is back", 'top news - 9999 readers')}
        {newsArticle("Raja is back", 'top news - 9999 readers')}
        {newsArticle("Raja is back", 'top news - 9999 readers')}
        {newsArticle("Raja is back", 'top news - 9999 readers')}
        {newsArticle("Raja is back", 'top news - 9999 readers')}

    </div>
  )
}

export default Widgets