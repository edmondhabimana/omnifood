import styles from './Testimonials.module.css'
import { dave, 
         ben, 
         steve, 
         hannah, 
         gallery1,
         gallery2,
         gallery3,
         gallery4,
         gallery5,
         gallery6,
         gallery7,
         gallery8,
         gallery9,
         gallery10,
         gallery11,
         gallery12 } from '../../assets/index'

export default function Testimonials() {
  return(
    <div className={styles.testimonials}>
      <div className={styles['testimonials-statements']}>
        <p className={styles['testimonials-title']}>testimonials</p>
        <h2 className={styles['testimonials-header']}>Once you try it, you can't go back</h2>
        <div className={styles['testimonials-statements-one']}>
          <div>
            <img src={dave} alt='customer dave' className={styles.customers}/>
            <p>Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</p>
            <p>— Dave Bryson</p>
          </div>
          <div>
            <img src={ben} alt='customer ben' className={styles.customers}/>
            <p>The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</p>
            <p>— Ben Hadley</p>
          </div>
        </div>
        <div className={styles['testimonials-statements-two']}>
          <div>
            <img src={steve} alt='customer steve' className={styles.customers}/>
            <p>Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</p>
            <p>— Steve Miller</p>
          </div>
          <div>
            <img src={hannah} alt='customer hannah' className={styles.customers}/>
            <p>I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
            <p>— Hannah Smith</p>
          </div>
        </div>
      </div>
      <div className={styles.food}>
        <div>
          <img src={gallery1} alt='food'/>
        </div>
        <div>
          <img src={gallery2} alt='food'/>
        </div>
        <div>
          <img src={gallery3} alt='food'/>
        </div>
        <div>
          <img src={gallery4} alt='food'/>
        </div>
        <div>
          <img src={gallery5} alt='food'/>
        </div>
        <div>
          <img src={gallery6} alt='food'/>
        </div>
        <div>
          <img src={gallery7} alt='food'/>
        </div>
        <div>
          <img src={gallery8} alt='food'/>
        </div>
        <div>
          <img src={gallery9} alt='food'/>
        </div>
        <div>
          <img src={gallery10} alt='food'/>
        </div>
        <div>
          <img src={gallery11} alt='food'/>
        </div>
        <div>
          <img src={gallery12} alt='food'/>
        </div>
      </div>
    </div>
  )
}