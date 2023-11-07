import React, { useState } from 'react'

const Accordion = (props) => {
  const {handleClick, activeAccordionNumber, itemNumber, title, content} = props; 
  const isActive = activeAccordionNumber === itemNumber; 
  return (
    <>
      <div 
        className='accordion-title' 
        onClick={() => {handleClick(itemNumber)}}
        style={{
          color: isActive ? 'black' : '#4B4C5F',
          cursor: 'pointer',
          fontWeight: isActive ? 'bold' : 'normal'
        }}
      >
        {title}
        {activeAccordionNumber === itemNumber 
        ? <p className='accordion-content'>{content}</p> 
        : null }
      </div>
    </>
  )
}

export default Accordion;
