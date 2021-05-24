import {useState, useEffect, useRef} from 'react'

export const UseFetch = (url) => {
    
    const isMounted= useRef(true);
    const [state, setState] = useState({data:null, loading:true, error:null});



    useEffect(()=>{
        isMounted.current=false
    })


    //Cuando va a cambiar la url

    useEffect(() => {
       
        fetch(url)
            .then(res => res.json())
            .then(data =>{

                setTimeout(() => {


                    if(isMounted.current){

                        setState({

                            data:data,
                            loading:false,
                            error:null,
                       
        
        
                        })

                    }else{
                        console.log('setState no se llamo');
                    }

                    
                    
                }, 4000);
               

            })
    }, [url])

    return state;
}
