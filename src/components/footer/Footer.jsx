import footerStyles from './Footer.module.css'
import { omnifoodLogo } from '../../assets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer({clickButton, selectedButton}) {
  return(
    <div className={footerStyles.footer}>
      <div className={footerStyles['logo-social']}>
        <a href='#navigation'>
          <img src={omnifoodLogo} alt='site logo' className={footerStyles.logo}/>
        </a>
        <div>
          <FontAwesomeIcon icon={faInstagram} className={footerStyles['social-logo']}/>
          <FontAwesomeIcon icon={faFacebook} className={footerStyles['social-logo']}/>
          <FontAwesomeIcon icon={faTwitter} className={footerStyles['social-logo']}/>
        </div>
        <p>Copyright © 2023 by Omnifood, Inc. All rights reserved.</p>
      </div>
      <div className={footerStyles['contact-us']}>
        <p>Contact us</p>
        <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
        <p><span>415-201-6370</span> hello@omnifood.com</p>
      </div>
      <div className={footerStyles.account}>
        <p>Account</p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(11)}
            className={11 === selectedButton ? `${footerStyles.selected}` : ''}
            >Create account</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(12)}
            className={12 === selectedButton ? `${footerStyles.selected}` : ''} 
            >Sign in</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(13)}
            className={13 === selectedButton ? `${footerStyles.selected}` : ''}  
            >iOS app</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(14)}
            className={14 === selectedButton ? `${footerStyles.selected}` : ''}  
            >Android app</a></p>
      </div>
      <div className={footerStyles.company}>
        <p>Company</p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(15)}
            className={15 === selectedButton ? `${footerStyles.selected}` : ''} 
            >About Omnifood</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(16)}
            className={16 === selectedButton ? `${footerStyles.selected}` : ''} 
            >For Business</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(17)}
            className={17 === selectedButton ? `${footerStyles.selected}` : ''}  
            >Cooking partners</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(18)}
            className={18 === selectedButton ? `${footerStyles.selected}` : ''}  
            >Careers</a></p>
      </div>
      <div className={footerStyles.resources}>
        <p>Resources</p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(19)}
            className={19 === selectedButton ? `${footerStyles.selected}` : ''}  
            >Recipe directory</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(20)}
            className={20 === selectedButton ? `${footerStyles.selected}` : ''} 
            >Help center</a></p>
        <p><a 
            href='#navigation'
            onClick={() => clickButton(21)}
            className={21 === selectedButton ? `${footerStyles.selected}` : ''}
            >Privacy & terms</a></p>
      </div>
    </div>
  )
}