import React from 'react'
import { UseCounter } from '../Hooks/useCounter';


export const CounterWithCustomHook = () => {

    const {state, increment, decrement,reset}=UseCounter();


    return (
        <>

                <h1> CustomHook {state}</h1>

                <hr/>

                        <button className="btn btn-primary" onClick={ increment }> Incrementar</button>

                        <button className="btn btn-warning" onClick={reset}>Reset</button>

                        <button className="btn btn-danger" onClick={ decrement }>Decrementar</button>


            
        </>
    )
}
