import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../Services/ProductosServices"
import {Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AuthContext from "../Context/AuthContext"
import Alert from 'react-bootstrap/Alert'
import Carousel from 'react-bootstrap/Carousel'

const styles = {

}

function DetallePage() {
    const {id} = useParams()
    console.log("Id",id)
    const [loading,setLoading] = useState(true)
    const [producto,setProducto] = useState({})
    const [mensaje,setMensaje] = useState('')


    const handleClick = async ()=>{
        try{
            const document = await firebase.db.collection("compra")
            .add({
                Email:firebase.auth.currentUser.email,
                Fecha:Date().toLocaleString(),
                Precio:producto.price,
                ProductoCompra:producto.title
            })
            setMensaje(<Alert >Gracias por su compra</Alert>)
        }catch(e){
            console.log(e)
        }
    } 


    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getByIdProductos(id)
                    console.log("response",response)
                    setLoading(false)
                    setProducto(response)
                }
                request()
            }catch(e){
                console.log(e)
            }
            
        },
        [id]
    )
    if(loading){
        return (<div>Cargando ...</div>)
    }else{
        return(
        <AuthContext.Consumer>
        {
                context=>


                
           <div className="">
            
        <Carousel>

      {producto.pictures.map(image=>
      <Carousel.Item><img className="d-block" alt="" style={styles} src={image.url}></img></Carousel.Item>)}
      </Carousel>
                <div>{mensaje}</div>
                <p> Estado: {producto.condition} </p>
                <h1>{producto.title}</h1>
                <p> Disponible: {producto.available_quantity}</p>
                <p> Precio en {producto.currency_id}: $ {producto.price}</p>
                <p>{producto.warranty}</p>
                {
                                    context.isLogin && 
                                    <Button onClick={handleClick} variant="primary">Comprar</Button>
                }
           </div>
         }
        </AuthContext.Consumer>
        
        )
    }
    

} 

export default DetallePage