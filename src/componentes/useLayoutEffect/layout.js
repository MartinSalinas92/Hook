import React from 'react'
import { UseFetch } from '../../Hooks/useFetch';
import { UseCounter } from '../../Hooks/useCounter';

export const Layout = () => {

   const{state, increment} =UseCounter(1)

   const {data}=UseFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

   console.log(data);
                            //!!data && data[0] es un condicional que si se evalua va a venir en la posicion 0
    const {author, quote}=!!data && data[0];

    return (
        <div>
            <h1> LayoutEffect</h1>
            <hr />

           

                    <blockquote className="blockquote text-end">

                    <p className="mb-0">{quote}</p>
                    <br/>

                    <footer className="blockquote-footer">{author} </footer>

                </blockquote>
                

            

            <button onClick={increment} className="btn btn-primary">

                Proximo

            </button>

                

               
        </div>
    )
}




