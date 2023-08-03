import React,{useState,useContext} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AuthContext from "../Context/AuthContext";
import {useNavigate} from "react-router-dom"


function Login(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = async (data)=>{
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.Email,data.Contraseña)
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                const user = await firebase.db.collection("usuario")
                .where("userId","==",responseUser.user.uid)
                .get()
                context.loginUser(user.docs[0].data())
                navigate("/")
            }
        }catch(e){
            console.log(e.code)
        }
        
    }

return(
    <div className="">
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email: " type="email" name="Email" register={{...register("Email", { required: true, minLength:3 })}} />
        <Input label="Contraseña: " type="password" name="Contraseña" register={{...register("Contraseña", { required: true})}} />
        <Button type="submit" variant="primary">Iniciar Sesion</Button>
    </Form>
    </div>
    )
    
}

export default Login
