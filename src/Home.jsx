import React from 'react'
import InfoCard from './Components/İnfoCards/InfoCard'
import ProductList from './Components/Products/Products'
import Slider1 from './Components/Slider/Slider1'
import Deal from './Components/Deal/Deal'
import Slider2 from './Components/Slider2/Slider2'

const Home = () => {

    return (
        <>
            <Slider1 />
            <InfoCard />
            <ProductList />
            <Deal />
            <Slider2 />
        </>
    )
}

export default Home