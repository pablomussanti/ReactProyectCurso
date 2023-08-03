import React,{useState} from "react"
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AuthContext from "../Context/AuthContext"
import Alert from 'react-bootstrap/Alert'





function Producto(props){
    const {data} = props
    const [mensaje,setMensaje] = useState('')

    const handleClick = async ()=>{
        try{
            const document = await firebase.db.collection("compra")
            .add({
                Email:firebase.auth.currentUser.email,
                Fecha:Date().toLocaleString(),
                Precio:data.price,
                ProductoCompra:data.title
            })
            setMensaje(<Alert >Gracias por su compra</Alert>)
            console.log(document)
        }catch(e){
            console.log(e)
        }
    } 


    return(
        <AuthContext.Consumer>
             {
                context=>
            <Col xs={15} sm={8} lg={6} xxl={4}>
            <Card>
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                    Lugar: {data.seller_address.city.name}
                    </Card.Text>
                    <Card.Text>
                    Precio: $ {data.price}
                    </Card.Text>
                    {
                                    context.isLogin && 
                                    <Button onClick={handleClick} variant="primary">Comprar</Button>
                    }
                    <Button as={Link} to={'/producto/'+data.id} variant="secondary">Detalle</Button>

                    <div>{mensaje}</div>

                </Card.Body>
            </Card>
        </Col>
        }
        </AuthContext.Consumer>
    )
}
export default Producto