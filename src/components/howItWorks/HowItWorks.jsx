import styles from './HowItWorks.module.css'
import { businessInsider, 
         forbes, 
         techcrunch, 
         theNewYorkTimes, 
         usaToday,
         appScreen1,
         appScreen2,
         appScreen3 } from "../../assets/index";

export default function HowItWorks() {
  return(
    <div className={styles['how-it-works']}>
      <p className={styles['featured']}>as featured in</p>
      <section className={styles['news-paper-company-logos']}>
        <img src={businessInsider} alt='business insider logo' className={styles.logos}/>
        <img src={forbes} alt='forbes logo' className={styles.logos}/>
        <img src={techcrunch} alt='techcrunch logo' className={styles.logos}/>
        <img src={theNewYorkTimes} alt='the new york times logo' className={styles.logos}/>
        <img src={usaToday} alt='usa today logo' className={styles.logos}/>
      </section>
      <section className={styles.directions}>
        <p className={styles['directions-title']}>How it works</p>
        <p className={styles['directions-header']}>Your daily dose of health in 3 simple steps</p>
        <div className={styles.step}>
          <div className={styles['first-div']}>
            <p className={styles.number}>01</p>
            <p className={styles.title}>Tell us what you like (and what not)</p>
            <p className={styles.paragraph}>Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
          </div>
          <div className={styles['last-div']}>
            <img src={appScreen1} alt='app' className={styles.app} />
            <div className={`${styles.circle} ${styles['inner-circle']}`}></div>
            <div className={`${styles.circle} ${styles['outer-circle']}`}></div>
          </div>
        </div>
        <div className={`${styles.step}`}>
          <div className={styles['first-div']}>
            <p className={styles.number}>02</p>
            <p className={styles.title}>Approve your weekly meal plan</p>
            <p className={styles.paragraph}>Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
          </div>
          <div className={styles['last-div']}>
            <img src={appScreen2} alt='app' className={styles.app} />
            <div className={`${styles.circle} ${styles['inner-circle']}`}></div>
            <div className={`${styles.circle} ${styles['outer-circle']}`}></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles['first-div']}>
            <p className={styles.number}>03</p>
            <p className={styles.title}>Receive meals at convenient time</p>
            <p className={styles.paragraph}>Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
          </div>
          <div className={styles['last-div']}>
            <img src={appScreen3} alt='app' className={styles.app} />
            <div className={`${styles.circle} ${styles['inner-circle']}`}></div>
            <div className={`${styles.circle} ${styles['outer-circle']}`}></div>
          </div>
        </div>
      </section>

    </div>
  )
}