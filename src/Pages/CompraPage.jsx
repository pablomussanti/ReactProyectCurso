import React,{Component} from "react"
import Compras from '../Components/Compras'
import firebase from '../Config/firebase'

const nombreuser = ""




class CompraPage extends Component{

    render(){
        return(
            
            <div className="">
                 Bienvenido {firebase.auth.currentUser.email}
                <h1>Estas son sus compras realizadas:</h1>
                <Compras />
            </div>
        )
    }
} 

export default CompraPage