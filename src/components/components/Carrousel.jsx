import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Carrousel = () => {
    return (
        <Carousel className="Carrousel">
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
    )
}

export default Carrousel

