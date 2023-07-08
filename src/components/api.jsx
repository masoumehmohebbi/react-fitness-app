
import { useEffect, useState } from 'react';
import { exerciseOptions, FetchData } from '../fetchData';

const Api = () => {
    const [exercise , setExercise] = useState([])
   
    useEffect(()=>{
        const getFitness = async() =>{
            try {
                const res= await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
             
               console.log(res);
               
            } catch (error) {
                console.log(error);
            }

    }
        getFitness()

       
    },[])
    

    return(
        <div className='text-blue-600'>api</div>
    )
}
 
export default Api;