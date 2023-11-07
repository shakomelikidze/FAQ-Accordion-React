import React, { useState } from 'react'
import Arrow from '../images/icon-arrow-down.svg'

const Accordion = (props) => {
  const {handleClick, activeAccordionNumber, itemNumber, title, content} = props; 
  const isActive = activeAccordionNumber === itemNumber; 
  const [arrowRotate, setArrowRotate] = useState(false);
  return (
    <>
      <div 
        className='accordion-title' 
        onClick={() => 
          {
            handleClick(itemNumber)
            setArrowRotate(!arrowRotate)
          }}
        style={{
          color: isActive ? 'black' : '#4B4C5F',
          cursor: 'pointer',
          fontWeight: isActive ? 'bold' : 'normal'
        }}
      >
        <img className={`arrow ${arrowRotate ? 'rotate' : 'rotate-two'}`} src={Arrow} alt="" />
        {title}
        {activeAccordionNumber === itemNumber 
        ? <p className='accordion-content'>{content}</p> 
        : null }
      </div>
      <div className='line'></div>
    </>
  )
}

export default Accordion;
