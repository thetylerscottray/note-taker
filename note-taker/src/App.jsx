import { useState } from 'react'
import Body from '../src/layouts/Body'
import Footer from '../src/layouts/Footer'
import Header from '../src/layouts/Header'
import Toolbar from '../src/layouts/Toolbar'

function App() {

  return (
    <>
      <Header/>
      <Toolbar/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
