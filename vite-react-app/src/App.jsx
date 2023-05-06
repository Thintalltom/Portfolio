import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap'
function App() {
  return (
    <div className='md:w-full md:h-full bg-sky-950 font-sans xs:w-full xs:h-full  '>
      <Navbar />
      <About /> 
    </div>
  )
}

export default App
