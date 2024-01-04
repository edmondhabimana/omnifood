import { useEffect, useState } from 'react'
import Menu from './Menu'
import logo from '../../assets/omnifood-logo.png'
import navigationStyles from './Navigation.module.css'


export default function Navigation({ clickButton, selectedButton }) {
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
    <div className={navigationStyles.navigation} id='navigation'>
      <img src={logo} alt="company logo" className={navigationStyles.logo}/> 

      {/* if open is true show mobile menu */}
      {matches && open && <Menu clickButton={clickButton} selectedButton={selectedButton}/>}

      {/* show the menu and close icon only when screen size reach 945px */}
      {matches === true ? open ? 
        <span 
          className={`material-symbols-outlined ${navigationStyles.icon}`}
          onClick={() => handleClick()}
        >
          close 
        </span> :
        <span 
          className={`material-symbols-outlined ${navigationStyles.icon}`}
          onClick={() => handleClick()}
        >
          menu
        </span> : <Menu clickButton={clickButton} selectedButton={selectedButton}/>
      }
    </div>
  )
}