import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header"
import HowItWorks from "./components/howItWorks/HowItWorks"
import Meals from "./components/meals/Meals"
import Testimonials from "./components/testimonials/Testimonials" 
import Price from "./components/pricing/Price"
import TryForFree from "./components/tryForFree/TryForFree"

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <HowItWorks/>
      <Meals/>
      <Testimonials/>
      <Price/>
      <TryForFree/>
    </>
  )
}

export default App
