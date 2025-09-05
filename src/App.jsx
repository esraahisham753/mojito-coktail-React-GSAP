import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <h1 className='text-3xl text-indigo-300 flex-center'>Hello, GSAP!</h1>
  )
}

export default App