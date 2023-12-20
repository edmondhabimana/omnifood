import styles from './Header.module.css'
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

export default function Header() {

  const customers = [customer1, customer2, customer3, customer4, customer5, customer6]

  return(
    <div className={styles['header-container']}>
      <div className={styles.header}>
        <section className={styles['container-one']}>
          <p className={styles.h1}>A healthy meal delivered to your door, every single day</p>
          <p className={styles.about}>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
          <div className={styles.buttons}>
            <button>Start eating well</button>
            <button className={styles['learn-more']}>
              <span>Learn more</span>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
          <div className={styles.customers}>
            <div>
              {customers.map((costumer, index) => 
                <img src={costumer} alt='costumer' key={index} className={styles.image}/>
              )}
            </div>
            <p className={styles['meals-delivered']}><span>250,000+</span> meals delivered last year!</p>
          </div>
        </section>
        <section className={styles['container-two']}>
          <img src={hero} alt='food' />
        </section>
      </div>
    </div>
  )
}