import headerStyles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { hero, 
         customer1, 
         customer2, 
         customer3, 
         customer4, 
         customer5, 
         customer6 
        } from '../../assets/index'

export default function Header({clickButton, selectedButton}) {

  const customers = [customer1, customer2, customer3, customer4, customer5, customer6]

  return(
    <div className={headerStyles['header-container']} id='header'>
      <div className={headerStyles.header}>
        <section className={headerStyles['container-one']}>
          <p className={headerStyles.h1}>A healthy meal delivered to your door, every single day</p>
          <p className={headerStyles.about}>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
          <div className={headerStyles.buttons}>
            <a href='#try'>
              <button 
              onClick={() => clickButton(6)}
              className={6 === selectedButton ? `${headerStyles.selected}` : ''}
              >
                Start eating well
              </button>
            </a>
            <a href='#how'>
              <button 
                onClick={() => clickButton(7)}
                className={`${headerStyles['learn-more']} ${7 === selectedButton ? `${headerStyles.selected}` : ''}`}
              >
                <span>Learn more</span>
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </a>
          </div>
          <div className={headerStyles.customers}>
            <div>
              {customers.map((costumer, index) => 
                <img src={costumer} alt='costumer' key={index} className={headerStyles.image}/>
              )}
            </div>
            <p className={headerStyles['meals-delivered']}><span>250,000+</span> meals delivered last year!</p>
          </div>
        </section>
        <section className={headerStyles['container-two']}>
          <img src={hero} alt='food' />
        </section>
      </div>
    </div>   
  )
}