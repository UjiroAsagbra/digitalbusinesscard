import Interest from './Interests'
import About from './About'
import Info from './Info'
import Buttons from './Buttons'
import Photo from './photo'
import Footer from './Footer'
import "./style.css"





function App() {
return (
  <div className='ctn'>
    <Photo />
    <div className='info-section'>
    <Info />
    <Buttons />
    <About />
    <Interest />    
  </div>
  <Footer/>
  </div>
)
}
export default App
