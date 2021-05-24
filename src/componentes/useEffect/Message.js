import React, {useEffect, useState} from 'react'

export const Message = () => {


    const [stateCors, setstateCors] = useState({
        x:'',
        y:''
    });

    const {x,y}= stateCors;


    useEffect(() => {
        //console.log('componente montado')

        const mousemove= (e)=>{

            //console.log(e)

            const corrs={x:e.x , y:e.y}
            //console.log(corrs);

            setstateCors(corrs);

        };

        window.addEventListener('mousemove', mousemove)
        return () => {
        
            window.removeEventListener('mousemove', mousemove)
        }
    }, []);


    return (
        <div>
            <h1>Eres GeniaL!</h1>

            <p>
                 x:{x}
                y:{y}
            </p>
        </div>
    )
}
