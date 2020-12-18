import React from 'react'
import {Link} from 'react-router-dom'
import ProductosContainer from '../components/ProductosContainer'
import '../styles/App.css'

const Home = (props) => {
    console.log(props)
    return (
        <div className="parte-00">

        <div className='parte-01'>
            <div className="parte-01-01">
                Si quieres contactarnos da <Link to="/contact"> Click aqui</Link>
            </div>
        </div>

        <div className='parte-02'>
            <div className="parte-01-01">
                Productos <Link to="/productos">Click aqui</Link>
            </div>
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