import React from 'react'
import './SectionHeader.css'

const SectionHeader = (props) => {

  const { title, suptitle, text } = props;

  return (
    <div className="section__header">
      <h3 className="section__suptitle">{suptitle}</h3>
      <h2 className="section__title">{title}</h2>
      <div className="section__text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SectionHeader