import './AppDesktop.css'
import './AppMobile.css'
import MobileIllustration from './images/illustration-woman-online-mobile.svg'
import Box from './images/illustration-box-desktop.svg'
import MobilePattern from './images/bg-pattern-mobile.svg'
import Arrow from './images/icon-arrow-down.svg'
import Accordion from './components/Accordion'
import { useState } from 'react'
function App() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null)
    } else {
      setActiveAccordionNumber(accordionNumber)
    }
    if (activeAccordionNumber === accordionNumber) {
      setIsClicked(!isClicked)
    }
  }
  const pStyle = {
    color: isClicked ? '#1E1F36' : '#4B4C5F',
    cursor: 'pointer'
  }

  return (
    <>
      <div className="card">
        <div className="illustration-div">
          <div className="desktop-illustration"></div>
          <img className='box' src={Box} alt="box" /> 
          <img className='mobile-illustration' src={MobileIllustration} alt='mobile-illustration'/>
          <img className='mobile-pattern' src={MobilePattern} alt="mobile-pattern" />
        </div>
        <div className="faq-div">
          <h1>FAQ</h1>
          <Accordion
            activeAccordionNumber = {activeAccordionNumber}
            handleClick = {handleClick}
            itemNumber = {1}
            title = {'How many team members can I invite?'}
            content = {'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'}
          />
          <Accordion
            activeAccordionNumber = {activeAccordionNumber}
            handleClick = {handleClick}
            itemNumber = {2}
            title = {'What is the maximum file upload size?'}
            content = {'No more than 2GB. All files in your account must fit your allotted storage space.'}
          />
          <Accordion
            activeAccordionNumber = {activeAccordionNumber}
            handleClick = {handleClick}
            itemNumber = {3}
            title = {'How do I reset my password?'}
            content = {'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'}
          />
          <Accordion
            activeAccordionNumber = {activeAccordionNumber}
            handleClick = {handleClick}
            itemNumber = {4}
            title = {'Can I cancel my subscription?'}
            content = {'Yes! Send us a message and we’ll process your request no questions asked.'}
          />
          <Accordion
            activeAccordionNumber = {activeAccordionNumber}
            handleClick = {handleClick}
            itemNumber = {5}
            title = {'Do you provide additional support?'}
            content = {'Chat and email support is available 24/7. Phone lines are open during normal business hours.'}
          />
        </div>
        
      </div>
    </>
  )
}

export default App
