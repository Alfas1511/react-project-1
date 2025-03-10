import { useState } from 'react'
import Navbar from './Navbar'
import About from './About'
import Experience from './Experience'
import Education from './Education'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Education />
    </>
  )
}

export default App
