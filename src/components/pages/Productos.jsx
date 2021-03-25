import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import HooksProductos from '../components/HooksProductos'

function Productos() {
    const [showComponent, setShowComponent] = useState(false)
    return (
        <div>
            {/* <Button
            color="primary"
            onClick={() => setShowComponent(!showComponent)}
            style={{margin: '20px'}}
            >
            Mostrar Productos
            </Button>

            {showComponent && <HooksProductos />} */}
            <HooksProductos />
        </div>
        )
    }

export default Productos