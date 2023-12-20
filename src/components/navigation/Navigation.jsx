import { useEffect, useState } from 'react'
import Menu from './Menu'
import logo from '../../assets/omnifood-logo.png'
import styles from './Navigation.module.css'


export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 945px)").matches
  ) 

  function handleClick(){
    setOpen((value) => !value)
  }

  useEffect(() => {
    window.matchMedia("(max-width: 945px)")
    .addEventListener('change', e => setMatches(e.matches))
  }, [])

  console.log(matches);

  return(
    <div className={styles.navigation}>
      <img src={logo} alt="company logo" className={styles.logo}/> 

      {/* if open is true show mobile menu */}
      {matches && open && <Menu/>}

      {/* show the menu and close icon only when screen size reach 945px */}
      {matches === true ? open ? 
        <span 
          className={`material-symbols-outlined ${styles.icon}`}
          onClick={() => handleClick()}
        >
          close 
        </span> :
        <span 
          className={`material-symbols-outlined ${styles.icon}`}
          onClick={() => handleClick()}
        >
          menu
        </span> : <Menu/>
      }
    </div>
  )
}