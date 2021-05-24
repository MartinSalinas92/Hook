import React, {useState} from 'react';
import './counter.css';

export const Counter = () => {

    const [state, setCounter] = useState({

        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    })

    //console.log(counter);

    const {counter1, counter2}=state;

    const AumentarCounter= ()=>{

    
        setCounter({

            //con el operador express lo que hago es mantener el mismo valos de los atributos del objeto
            ... state,
           counter1: counter1 +1,
        });

    }


    return (
       <>

            <h1>{counter1}</h1>
            <h1>{counter2}</h1>

        <button
            className="btn btn-primary"
            onClick={AumentarCounter}
        
        >
            +1

        </button>
       
       
        </>
    )
}

