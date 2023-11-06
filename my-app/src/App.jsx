import './AppDesktop.css'
import './AppMobile.css'
import DesktopIllustration from './images/illustration-woman-online-desktop.svg'
import MobileIllustration from './images/illustration-woman-online-mobile.svg'
import Box from './images/illustration-box-desktop.svg'
import DesktopPattern from './images/bg-pattern-desktop.svg'
import MobilePattern from './images/bg-pattern-mobile.svg'
import Arrow from './images/icon-arrow-down.svg'
function App() {

  return (
    <>
      <div className="card">
        <div className="illustration-div">
          <div className="desktop-illustration"></div>
          <img className='box' src={Box} alt="box" /> 
          <div className="desktop-pattern"></div>
          <img className='mobile-illustration' src={MobileIllustration} alt='mobile-illustration'/>
          <img className='mobile-pattern' src={MobilePattern} alt="mobile-pattern" />
        </div>
        <div className="faq-div">
          <h1>FAQ</h1>
        </div>
        
      </div>
    </>
  )
}

export default App
