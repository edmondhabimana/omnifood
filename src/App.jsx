import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header"
import HowItWorks from "./components/howItWorks/HowItWorks"
import Meals from "./components/meals/Meals"
import Testimonials from "./components/testimonials/Testimonials" 
import Price from "./components/pricing/Price"
import TryForFree from "./components/tryForFree/TryForFree"
import Footer from "./components/footer/Footer"
import { useState } from "react"

function App() {
  const [ selectedButton, setSelectedButton ] = useState(0)

  function handleClick(id) {
    setSelectedButton(id !== selectedButton ? id : selectedButton)
  }

  return (
    <>
      <Navigation 
        clickButton={handleClick} 
        selectedButton={selectedButton}
      />
      <Header 
        clickButton={handleClick} 
        selectedButton={selectedButton}
      />
      <HowItWorks/>
      <Meals
        clickButton={handleClick} 
        selectedButton={selectedButton}      
      />
      <Testimonials/>
      <Price
        clickButton={handleClick} 
        selectedButton={selectedButton}
      />
      <TryForFree/>
      <Footer
        clickButton={handleClick} 
        selectedButton={selectedButton}      
      />
    </>
  )
}

export default App
