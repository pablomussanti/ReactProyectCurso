import React,{useState} from "react"
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'
import firebase from "../Config/firebase"

function Compra(props){
    const {data,id} = props
    if (data.Email == firebase.auth.currentUser.email) {
        console.log(data)

        return(
            <Col xs={6} sm={4} lg={3} xxl={2}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                        Fecha: {data.Fecha}
                        </Card.Text>
                        <Card.Text>
                        Producto: {data.ProductoCompra}
                        </Card.Text>
                        <Card.Text>
                        Precio: {data.Precio}
                        </Card.Text>
                    </Card.Body>
                </Card>
    
            </Col>
        )
        
    }
    
}
export default Compra