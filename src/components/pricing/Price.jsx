import priceStyles from './Price.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, 
         faX, 
         faInfinity, 
         faAppleWhole, 
         faLeaf, 
         faPause } from '@fortawesome/pro-light-svg-icons'

export default function Price({clickButton, selectedButton}) {
  return(
    <div className={priceStyles.pricing} id='pricing'>
      <p className={priceStyles['pricing-title']}>Pricing</p>
      <h2 className={priceStyles['pricing-header']}>Eating well without breaking the bank</h2>
      <div className={priceStyles['price-choice']}>
        <div>
          <p>starter</p>
          <p><span>$</span> 399</p>
          <p>per month. That's just $13 per meal!</p>
          <ul>
            <li>
            <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              1 meal per day
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              Order from 11am to 9pm
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              Delivery is free
            </li>
            <li>
              <FontAwesomeIcon icon={faX} className={priceStyles.x}/>
              Get access to latest recipes
            </li>
          </ul>
          <a href='#navigation'>
            <button 
              onClick={() => clickButton(9)}
              className={`${priceStyles.buttons} ${9 === selectedButton ? `${priceStyles.selected}` : '' }`}
            >
              Start eating well
            </button>
          </a>
        </div>
        <div>
          <p>complete</p>
          <p><span>$</span> 649</p>
          <p>per month. That's just $11 per meal!</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              2 meal per day
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              Order 24/7
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              Delivery is free
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={priceStyles.check}/>
              Get access to latest recipes
            </li>
          </ul>
          <a href='#navigation'>
            <button 
              onClick={() => clickButton(10)}
              className={`${10 === selectedButton ? `${priceStyles.selected}` : ''} ${priceStyles.buttons}`}
            >
              Start eating well
            </button>
          </a>
          <p className={priceStyles.tag}>best value</p>
        </div>
      </div>
      <p className={priceStyles['middle-paragraph']}>Prices include all applicable taxes. You can cancel at any time. Both plans include the following:</p>
      <div className={priceStyles['included-in-plan']}>
        <div>
          <FontAwesomeIcon icon={faInfinity}  className={priceStyles.icons}/>
          <p>Never cook again!</p>
          <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faAppleWhole} className={priceStyles.icons}/>
          <p>Local and organic</p>
          <p>Our cooks only use local, fresh, and organic products to prepare your meals.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLeaf} flip="horizontal" className={priceStyles.icons}/>
          <p>No waste</p>
          <p>All our partners only use reusable containers to package all your meals.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPause} className={priceStyles.icons}/>
          <p>Pause anytime</p>
          <p>Going on vacation? Just pause your subscription, and we refund unused days.</p>
        </div>
      </div>
    </div>
  )
}