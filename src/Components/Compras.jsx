import React,{useState,useEffect} from "react"
import Compra from "./Compra"
import {getAllCompra} from '../Services/CompraServices'
import Row from "react-bootstrap/Row"
import firebase from "../Config/firebase"


function Compras(){
    const [loading,setLoading] = useState(true)
    const [compras,setCompra] = useState([])

    useEffect(
        ()=>{
                const request = async ()=>{
                    try{
                        const response = await getAllCompra()
                        console.log(response)
                        setCompra(response)
                        setLoading(false)
                    }catch(e){
                        console.log(e)
                    }
                    
                }
                request()
        },
        []
    )

    if(loading){
            return(<div>Cargando...</div>)
    }else{
        console.log(firebase.auth.currentUser.email)
        return(
            <div>
                <Row>
                    {compras.map((DatoCompra,index)=><Compra key={DatoCompra.id} data={DatoCompra.data()} id={DatoCompra.id} />)}
                </Row>
            </div>
        )
    }
}

export default Compras