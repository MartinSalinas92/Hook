import {useState} from 'react'

export const UseCounter = (valor=10) => {

    const [state, setState] = useState(valor);


    const increment= ()=>{

        setState(state +1);
    };

    const decrement= ()=>{
        setState(state -1);
    };
    const reset =()=>{

        setState(valor)
    }

    return{
        state,
        increment,
        decrement,
        reset
    };

}
