import React, {useRef} from 'react'
import '../useEffect/Effect.css'

export const FocusScreen = () => {

    const inputRef= useRef();

    //console.log(inputRef);


    const handleCLick=()=>{

        inputRef.current.select()

    }

    return (
        <div>

            <h1> Hola mundo</h1>

            <hr />

            <input
            ref={ inputRef }
            placeholder="nombre"
            className="form-control"
            
            
            />

            <button className="btn btn-outline-primary mt-5" onClick={handleCLick}>

                Focus
            </button>
            
           

        </div>
    )
}
