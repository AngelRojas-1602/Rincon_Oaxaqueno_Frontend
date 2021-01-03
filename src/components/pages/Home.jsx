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
                    src="https://dl.dropboxusercontent.com/s/u68hl9dfh3s9t6t/Clasico1Kg.png?dl=0"
                    alt="Clasico 1Kg"
                    />
                    {/* <Carousel.Caption>
                    <h3>Chocolate Mayordomo</h3>
                    <p>Clasico 1Kg</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dl.dropboxusercontent.com/s/umz6enxmx9943jj/Premium1Kg.png?dl=0"
                    alt="Chocolate Premium1Kg"
                    />
                    {/* <Carousel.Caption>
                    <h3>Chocolate Mayordomo</h3>
                    <p>Premium 1Kg</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dl.dropboxusercontent.com/s/taktf21fnykxju4/Semiamargo1Kg.png?dl=0"
                    alt="Semiamargo 1Kg"
                    />
                    {/* <Carousel.Caption>
                    <h3>Chocolate Mayordomo</h3>
                    <p>SEMIAMARGO 1Kg</p>
                    </Carousel.Caption> */}
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