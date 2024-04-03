import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import "./Styles/App.scss"
import "./Styles/colors.scss"
import "./Styles/Header.scss"
import "./Styles/Home.scss"
import "./Styles/Contact.scss"
import "./Styles/Resources.scss"
import Home from "./Components/Home"
import Footer from './Components/Footer'
import Connect from './Components/Contact.jsx'
import Resources from './Components/Resources.jsx'
import "./Styles/Media.scss"
function App() {
  return (

    <Router>
         <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Connect/>}/>
            <Route path='/resources' element={<Resources/>}/>   
        </Routes>
        <Footer/>
    </Router>
    
  )
}

export default App