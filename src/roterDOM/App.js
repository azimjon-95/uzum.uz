import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './router/about/About'
import Info from './router/info/Info'
import Contact from './router/contact/Contact'
import SinglePage from './router/singelPage/SinglePage'
import Smusk from './components/smus/smusk'

const DomApp = () => {

    return (
        <div>
            <Navbar />
            <Smusk />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='info' element={<Info />} />
                <Route path='contact' element={<Contact />} />
                <Route path='mahsulot/:id' element={<SinglePage />} />
            </Routes>
        </div>
    )
}

export default DomApp
