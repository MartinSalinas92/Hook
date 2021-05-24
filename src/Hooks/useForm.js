import React, {useState} from 'react'

export const UseForm = (inicializacion={}) => {


    const [valueForm, setForm] = useState(inicializacion)
    

    const handleInputChange=({target})=>{

        //console.log(target.name);
        //console.log(target.value);

        setForm({
            ...valueForm,
            [target.name]:target.value
        })



    }
    return [valueForm, handleInputChange];
}
