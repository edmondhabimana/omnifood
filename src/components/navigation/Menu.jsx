import MenuSyles from './Navigation.module.css'
// import { hashLink as Link } from "react-router-hash-link"

export default function Menu ({clickButton, selectedButton }) {
  return(
    <>
      <ul className={MenuSyles.menu}>
        <li 
          onClick={() => clickButton(1)}
          className={1 === selectedButton ? `${MenuSyles.selected}` : ""}
        >
          <a href='#how'>How it works</a>
        </li>
        <li
          onClick={() => clickButton(2)}
          className={2 === selectedButton ? `${MenuSyles.selected}` : ""}
        >
          <a href='#meals'>Meals</a>
        </li>
        <li
          onClick={() => clickButton(3)}
          className={3 === selectedButton ? `${MenuSyles.selected}` : ""}        
        >
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li
          onClick={() => clickButton(4)}
          className={4 === selectedButton ? `${MenuSyles.selected}` : ""}        
        >
          <a href='#pricing'>Pricing</a>
        </li>
        <li>
          <button
            onClick={() => clickButton(5)}
            className={5 === selectedButton ? `${MenuSyles.selected}` : ""}          
          >
            <a href='#try'>Try for free</a>
          </button>
        </li>
      </ul>
    </>
  )
}