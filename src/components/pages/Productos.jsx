import React, {useState} from 'react'
import HooksProductos from '../components/HooksProductos'

function Productos() {
    const [showComponent, setShowComponent] = useState(false)
    return (
        <div>
            <button
            onClick={() => setShowComponent(!showComponent)}
            style={{margin: '20px'}}
            >
            Intercambiar components
            </button>

            {showComponent && <HooksProductos />}
        </div>
        )
    }

export default Productos