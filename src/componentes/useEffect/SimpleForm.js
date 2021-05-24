import React, { useEffect,useState} from 'react';
import './Effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [stateform, setStateForm] = useState({

        name:'',
        email:''
    });

    const {name , email}=stateform;


    //Este useEffect sirve ni bien se recarga el formulario

    useEffect(() => {
        
        //console.log('!HEy');
    },[]);

     //Este useEffect sirve cuando se cambia algo al formulario
    useEffect(() => {
        
       // console.log('el fomulario cambio');
    },[stateform])
     //Este useEffect sirve cuando se cambia algo en el Email
    useEffect(() => {
        
        //console.log('el email esta cambiando');
    },[email])


    const handleInputChange=({target})=>{

        //console.log(target.name);
        //console.log(target.value);

        setStateForm({
            ...stateform,
            [target.name]:target.value
        })



    }


    return (
        <>
            <h1>Hola Formulario</h1>

            <hr />

            <div className="form-group">
            <input 

                type="text"
                name="name"
                placeholder="Escriba aqui su nombre"
                className="form-control"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}



                />
                <br />
            <input 

                type="text"
                name="email"
                placeholder="tiendanube@gmail.com"
                className="form-control"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}



                />

                {(name ==='123') && <Message />}

            </div>
           
            
        </>
    )
}
