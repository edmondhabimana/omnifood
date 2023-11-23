import styles from './Navigation.module.css'

export default function Menu () {
  return(
    <>
      <ul className={styles.menu}>
        <li>How it works</li>
        <li>Meals</li>
        <li>Testimonials</li>
        <li>Pricing</li>
        <li><button>Try for free</button></li>
      </ul>
    </>
  )
}