import React from 'react'

const TarjetaProductos = (props) => {
    return (
        <div className="tarjeta-productos">
            <img className="tarjeta-product-image" src={props.image} alt=""/>
            <h2 className='tarjeta-product-titles'>Nombre: {props.name}</h2>
            <h4 className='tarjeta-product-titles'>Precio: ${props.created}</h4>
            <h4 className='tarjeta-product-titles'>Descripcion: {props.description}</h4>
            <h4 className='tarjeta-product-titles'>Disponibilidad en Stock: {props.stock}</h4>
            {/* <p>{props.ALGO</p> */}
        </div>
    )
}

export default TarjetaProductos
