import styles from './Meals.module.css'
import { meal1, meal2 } from '../../assets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, 
         faStar, 
         faForkKnife, 
         faCheck,
         faArrowRightLong } from '@fortawesome/pro-light-svg-icons'

export default function Meals() {
  return(
    <div className={styles.meals}>
      <p className={styles['meals-title']}>Meals</p>
      <h2 className={styles['meals-header']}>Omnifood AI chooses from 5,000+ recipes</h2>
      <div className={styles.container}>
        <div className={styles['first-card']}>
          <img src={meal1} alt='meal' className={styles['meal-image']}/>
          <div className={styles.tag}>
            <p className={styles['tag-color1']}>vegetarian</p>
          </div>
          <p className={styles['card-title']}>Japanese Gyozas</p>
          <ul className={styles.stats}>
            <li>
              <FontAwesomeIcon icon={faFire} className={styles.icon}/>
              <span>650</span> calories
            </li>
            <li>
              <FontAwesomeIcon icon={faForkKnife} className={styles.icon}/>
              NutriScore <span>74</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className={styles.icon}/>
              <span>4.9</span> rating (537)
            </li>
          </ul>
        </div>
        <div className={styles['second-card']}>
          <img src={meal2} alt='meal' className={styles['meal-image']}/>
          <div className={`${styles.tag} ${styles.color}`}>
            <p className={styles['tag-color2']}>vegan</p>
            <p className={styles['tag-color3']}>paleo</p>
          </div>
          <p className={styles['card-title']}>Avocado Salad</p>
          <ul className={styles.stats}>
            <li>
              <FontAwesomeIcon icon={faFire} className={styles.icon}/>
              <span>400</span> calories
            </li>
            <li>
              <FontAwesomeIcon icon={faForkKnife} className={styles.icon}/>
              NutriScore <span>92</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className={styles.icon}/>
              <span>4.8</span> rating (441)
            </li>
          </ul>
        </div>
        <div className={styles['third-card']}>
          <p>Works with any diet:</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Vegetarian
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Vegan
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Pescatarian
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Gluten-free
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Lactose-free
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Keto
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Paleo
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Low FODMAP
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check}/>
              Kid-friendly
            </li>
          </ul>
        </div>
      </div>
      <p className={styles['recipes-link']}>
        See all recipes
        <FontAwesomeIcon icon={faArrowRightLong} className={styles['arrow-right']}/>
      </p>
      <hr className={styles.line}/>
    </div>
  )
}