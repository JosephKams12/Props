
import './App.css'
import Profile from './Componet/ProfileCard/Profile'
import Image1 from "./assets/Images/man1.jpg"
import Image2 from "./assets/Images/man 2.jpg"
import Image3 from "./assets/Images/woman1.jpg"
import Image4 from "./assets/Images/woman 2.jpg"
import Home from './Pages/Home/Home'

function App() {
  

  return (
    <>
    
      
    
    <div className='Profile'>
      <Profile image={Image1} name="Joseph" age="24" location="Lagos Nigeria" />
      <Profile image={Image2} name="Ibukun" age="30" location="Lagos Nigeria" />
      <Profile image={Image3} name="Sylvia" age="27" location="Lagos Nigeria" />
      <Profile image={Image4} name="Amaka" age="28" location="Lagos Nigeria" />
    </div>

      <Home />
    </>
  )
}

export default App
