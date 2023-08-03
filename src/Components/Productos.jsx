import React,{useState,useEffect} from "react"
import Producto from "./Producto"
import {getAllProductos} from '../Services/ProductosServices'
import Row from "react-bootstrap/Row"

function Productos(){
    const [loading,setLoading] = useState(true)
    const [productos,setProductos] = useState([])
    const [buscar,setBuscar] = useState('Placa de Video')

    useEffect(
        ()=>{
                const request = async ()=>{
                    try{
                        const response = await getAllProductos(buscar)
                        setProductos(response.results)
                        setLoading(false)
                    }catch(e){
                        console.log(e)
                    }
                    
                }
                request()
        },
        [buscar]
    )

    const handleChange = (event)=>{
        const value = event.target.value
        setBuscar(value)
    }


    if(loading){
            return(<div>Cargando...</div>)
    }else{
        const titulo = "Listado De Productos"
        return(
            <div>
                <h1>{titulo}</h1>
                Buscador: <input value={buscar} onChange={handleChange}></input>
                <Row>
                {productos.map(productoData=><Producto data={productoData} />)}
                </Row>
            </div>
        )
    }
}

export default Productos
