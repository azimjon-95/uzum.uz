import React from 'react'
import './home.css'
import Banner from '../banner/Banner'
import Mahsulot from '../Mahsulotlar/Mahsulot'
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Mahsulot />
            <Footer />
        </div>
    )
}
export default Home