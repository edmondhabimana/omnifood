import howItWorksStyles from './HowItWorks.module.css'
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
    <div className={howItWorksStyles['how-it-works']} id="how">
      <p className={howItWorksStyles['featured']}>as featured in</p>
      <section className={howItWorksStyles['news-paper-company-logos']}>
        <img src={businessInsider} alt='business insider logo' className={howItWorksStyles.logos}/>
        <img src={forbes} alt='forbes logo' className={howItWorksStyles.logos}/>
        <img src={techcrunch} alt='techcrunch logo' className={howItWorksStyles.logos}/>
        <img src={theNewYorkTimes} alt='the new york times logo' className={howItWorksStyles.logos}/>
        <img src={usaToday} alt='usa today logo' className={howItWorksStyles.logos}/>
      </section>
      <section className={howItWorksStyles.directions}>
        <p className={howItWorksStyles['directions-title']}>How it works</p>
        <p className={howItWorksStyles['directions-header']}>Your daily dose of health in 3 simple steps</p>
        <div className={howItWorksStyles.step}>
          <div className={howItWorksStyles['first-div']}>
            <p className={howItWorksStyles.number}>01</p>
            <p className={howItWorksStyles.title}>Tell us what you like (and what not)</p>
            <p className={howItWorksStyles.paragraph}>Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
          </div>
          <div className={howItWorksStyles['last-div']}>
            <img src={appScreen1} alt='app' className={howItWorksStyles.app} />
            <div className={`${howItWorksStyles.circle} ${howItWorksStyles['inner-circle']}`}></div>
            <div className={`${howItWorksStyles.circle} ${howItWorksStyles['outer-circle']}`}></div>
          </div>
        </div>
        <div className={`${howItWorksStyles.step}`}>
          <div className={howItWorksStyles['first-div']}>
            <p className={howItWorksStyles.number}>02</p>
            <p className={howItWorksStyles.title}>Approve your weekly meal plan</p>
            <p className={howItWorksStyles.paragraph}>Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
          </div>
          <div className={howItWorksStyles['last-div']}>
            <img src={appScreen2} alt='app' className={howItWorksStyles.app} />
            <div className={`${howItWorksStyles.circle} ${howItWorksStyles['inner-circle']}`}></div>
            <div className={`${howItWorksStyles.circle} ${howItWorksStyles['outer-circle']}`}></div>
          </div>
        </div>
        <div className={howItWorksStyles.step}>
          <div className={howItWorksStyles['first-div']}>
            <p className={howItWorksStyles.number}>03</p>
            <p className={howItWorksStyles.title}>Receive meals at convenient time</p>
            <p className={howItWorksStyles.paragraph}>Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
          </div>
          <div className={howItWorksStyles['last-div']}>
            <img src={appScreen3} alt='app' className={howItWorksStyles.app} />
            <div className={`${howItWorksStyles.circle} ${howItWorksStyles['inner-circle']}`}></div>
            <div className={`${howItWorksStyles.circle} ${howItWorksStyles['outer-circle']}`}></div>
          </div>
        </div>
      </section>

    </div>
  )
}