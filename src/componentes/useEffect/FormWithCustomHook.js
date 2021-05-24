import React, {useState,  useEffect} from 'react'
import { UseForm } from '../../Hooks/useForm';

export const FormWithCustomHook = () => {

    const [valueForm, handleInputChange] = UseForm({

        name:'',
        email:'', 
        password:''
    });

    const {name , email, password}=valueForm;

    //Cuando cambie el email
    useEffect(()=>{
        console.log('Esta cambiando el email')
    },[email]);


    const handleSubmit = (e)=>{

        e.preventDefault();

        console.log(valueForm);
    }



    return (

        <form onSubmit={handleSubmit}>
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
                    
                    <br />
                    <input 

                        type="password"
                        name="password"
                        placeholder="*****"
                        className="form-control"
                        value={password}
                        onChange={handleInputChange}



                        />

                    


                    

</div>
<br />

        <button type="submit" className="btn btn-primary">

            Guardar
        </button>
            
        </form>
    )
}
