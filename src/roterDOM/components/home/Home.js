import React from 'react'
import './home.css'
import Banner from '../banner/Banner'
import Properies from '../properies/Properies'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Properies />
            <Footer />
        </div>
    )
}
export default Home