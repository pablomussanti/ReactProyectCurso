import React,{Component} from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase"
import {useNavigate} from "react-router-dom"

function Registro(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data)=>{
        try{
            if (data.Contraseña == data.Contraseña2) {
                const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.Email,data.Contraseña)
                 console.log(responseUser.user.uid)
                if(responseUser.user.uid){
                console.log("responseUser")
                const document = await firebase.db.collection("usuario")
                .add({
                    Nombre:data.Nombre,
                    Apellido:data.Apellido,
                    Telefono:data.Telefono,
                    userId:responseUser?.user?.uid
                })
                navigate("/")
                console.log(document)
            }
            }
        }catch(e){
            console.log(e)
        }
        
    }


return(
    <div className="">
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nombre: " type="text"name="Nombre" register={{...register("Nombre", { required: true, minLength:3 })}} />
        <div>
            {errors.name?.type==="required" && <span>El campo es obligatorio</span>}
            {errors.name?.type==="minLength" && <span>Debe introducir al menos 3 caracteres</span>}
        </div>
        <Input label="Apellido: " type="text" name="Apellido" register={{...register("Apellido", { required: true})}} />
        <div>
            {errors.lastname?.type==="minLength" && <span>Debe introducir al menos 3 caracteres</span>}
        </div>
        <Input label="Email: " type="email" name="Email" register={{...register("Email", { required: true})}} />
        <Input label="Telefono: " type="number" name="Telefono" register={{...register("Telefono", { required: true})}} />
        <div>
        </div>
        <Input label="Contraseña: " type="password" name="Contraseña" register={{...register("Contraseña", { required: true})}} />
        <div>
        </div>
        <Input label="Confirmar Contraseña: " type="password" name="Contraseña2" register={{...register("Contraseña2", { required: true})}} />
        <div>
        </div>
        <Button type="submit" variant="primary">Registrarse</Button>
    </Form>
    </div>
    )
    
}

export default Registro