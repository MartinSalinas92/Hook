import {useState, useEffect, useRef} from 'react'

export const UseFetch = (url) => {
    
    const isMounted= useRef(true);

    //console.log(isMounted);
    const [state, setState] = useState({data:null, loading:true, error:null});



    useEffect(()=>{
        isMounted.current=false
    },[])


    //Cuando va a cambiar la url

    useEffect(() => {
       
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                //console.log(data);
                setTimeout(() => {


                   

                        setState({

                            data:data,
                            loading:false,
                            error:null,
                       
        
        
                        })

                   

                    
                    
                }, 4000);
               

            })
    }, [url])

    return state;
}
