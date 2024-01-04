import mealsStyles from './Meals.module.css'
import { meal1, meal2 } from '../../assets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, 
         faStar, 
         faForkKnife, 
         faCheck,
         faArrowRightLong } from '@fortawesome/pro-light-svg-icons'

export default function Meals({clickButton, selectedButton}) {
  return(
    <div className={mealsStyles.meals} id='meals'>
      <p className={mealsStyles['meals-title']}>Meals</p>
      <h2 className={mealsStyles['meals-header']}>Omnifood AI chooses from 5,000+ recipes</h2>
      <div className={mealsStyles.container}>
        <div className={mealsStyles['first-card']}>
          <img src={meal1} alt='meal' className={mealsStyles['meal-image']}/>
          <div className={mealsStyles.tag}>
            <p className={mealsStyles['tag-color1']}>vegetarian</p>
          </div>
          <p className={mealsStyles['card-title']}>Japanese Gyozas</p>
          <ul className={mealsStyles.stats}>
            <li>
              <FontAwesomeIcon icon={faFire} className={mealsStyles.icon}/>
              <span>650</span> calories
            </li>
            <li>
              <FontAwesomeIcon icon={faForkKnife} className={mealsStyles.icon}/>
              NutriScore <span>74</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className={mealsStyles.icon}/>
              <span>4.9</span> rating (537)
            </li>
          </ul>
        </div>
        <div className={mealsStyles['second-card']}>
          <img src={meal2} alt='meal' className={mealsStyles['meal-image']}/>
          <div className={`${mealsStyles.tag} ${mealsStyles.color}`}>
            <p className={mealsStyles['tag-color2']}>vegan</p>
            <p className={mealsStyles['tag-color3']}>paleo</p>
          </div>
          <p className={mealsStyles['card-title']}>Avocado Salad</p>
          <ul className={mealsStyles.stats}>
            <li>
              <FontAwesomeIcon icon={faFire} className={mealsStyles.icon}/>
              <span>400</span> calories
            </li>
            <li>
              <FontAwesomeIcon icon={faForkKnife} className={mealsStyles.icon}/>
              NutriScore <span>92</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className={mealsStyles.icon}/>
              <span>4.8</span> rating (441)
            </li>
          </ul>
        </div>
        <div className={mealsStyles['third-card']}>
          <p>Works with any diet:</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Vegetarian
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Vegan
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Pescatarian
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Gluten-free
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Lactose-free
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Keto
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Paleo
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Low FODMAP
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={mealsStyles.check}/>
              Kid-friendly
            </li>
          </ul>
        </div>
      </div>
      <a href='#navigation'
        onClick={() => clickButton(8)}
        className={8 === selectedButton ? `${mealsStyles.selected}` : ''}
      >
        <p className={mealsStyles['recipes-link']}>
          See all recipes
          <FontAwesomeIcon icon={faArrowRightLong} className={mealsStyles['arrow-right']}/>
        </p>
      </a>
      <hr className={mealsStyles.line}/>
    </div>
  )
}