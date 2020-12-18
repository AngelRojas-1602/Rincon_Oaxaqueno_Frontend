import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import ProductosContainer from '../components/ProductosContainer'
import '../styles/App.css'

const Home = (props) => {
    console.log(props)
    return (
        <div className="parte-00">

        <div className='parte-01'>
            <div className="parte-01-text">
                Si quieres contactarnos da <Link to="/contact"> Click aqui</Link>
            </div>
        </div>

        <div className='parte-02'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dl.dropboxusercontent.com/s/efjfzqfsf6wzcaf/WhatsApp%20Image%202020-08-20%20at%2018.09.43.jpeg?dl=0"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dl.dropboxusercontent.com/s/efjfzqfsf6wzcaf/WhatsApp%20Image%202020-08-20%20at%2018.09.43.jpeg?dl=0"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dl.dropboxusercontent.com/s/efjfzqfsf6wzcaf/WhatsApp%20Image%202020-08-20%20at%2018.09.43.jpeg?dl=0"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

        <ProductosContainer/>

        <div className='parte-03'>
            <div className="parte-01-01">Parte 3</div>
        </div>
        <div className='parte-04'>
            <div className="parte-01-01">Parte 4</div>
        </div>
        <div className='parte-05'>
            <div className="parte-01-01">Parte 5</div>
        </div>

        </div>

    )
}

export default Home