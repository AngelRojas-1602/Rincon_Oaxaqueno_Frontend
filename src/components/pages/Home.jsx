import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import ProductosContainer from '../components/ProductosContainer'
import Carrousel from '../components/Carrousel'
import '../styles/App.css'

const Home = (props) => {
    console.log(props)
    return (
        <div className="parte-00">

        <div className='parte-01'/>

        <Carrousel/>

        <ProductosContainer/>

        <div className='parte-03'>
            <div className="parte-01-01"></div>
        </div>

        {/* <div className='parte-04'>
            <div className="parte-01-01"></div>
        </div> */}

        </div>

    )
}

export default Home