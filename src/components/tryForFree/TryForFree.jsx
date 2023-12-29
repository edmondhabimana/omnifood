import styles from './TryForFree.module.css'
import { eating } from '../../assets/index'

export default function TryForFree() {
  return(
    <div className={styles['try-for-free-container']}>
    <div className={styles['try-for-free']}>
      <div className={styles['container-1']}>
        <h2 className={styles['try-for-free-header']}>Get your first meal for free!</h2>
        <p>Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
        <form>
          <label>Full Name <input type="text" placeholder='John Smith' className={styles.input}/></label>
          <label>Email address <input type="email" placeholder='me@example.com' className={styles.input}/></label>
          <label>
            Where did you hear from us? 
            <select className={styles.input}>
              <option>Please choose one option</option>
              <option>Friends and family</option>
              <option>Youtube video</option>
              <option>Podcast</option>
              <option>Facebook ad</option>
              <option>others</option>
            </select>
          </label>
          <button>Sign up now</button>
        </form>
      </div>
      <div className={styles['background-image']}></div>
    </div>
    </div>
  )
}