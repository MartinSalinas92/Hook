import React, {useState} from 'react'
import { MultiplesCustomHook } from '../examples/MultiplesCustomHook'
import '../useEffect/Effect.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);


    const Ocultar=()=>{
         
        setShow(!show);
    }


    return (
        <div>
            <h1> Ejemplo Real de Ref</h1>

            <hr/>

            

            {
                show && <MultiplesCustomHook />
            }

            <button
                className="btn btn-primary mt-5"
                onClick={Ocultar}

            >
                Mostrar / No Mostrar
            </button>

        </div>
    )
}
