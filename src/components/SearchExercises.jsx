import { useEffect, useState } from "react";
import { FetchData, exerciseOptions } from "../../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// eslint-disable-next-line react/prop-types
const SearchExercises = ({setExercise, bodyPart, setBodypart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyparts] = useState([])

    useEffect(()=>{
        const getExersizeData = async() =>{
            const bodyPartData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            
            setBodyparts(['all', ...bodyPartData.data])
        }
        getExersizeData()
    },[])
    
    const searchHandler = async() =>{
        if (search) {
         try {
            const exerciseData= await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
          
            const searchExercises = exerciseData.data.filter(exercise => 
                exercise.name.toLocaleLowerCase().includes(search)
                || exercise.target.toLocaleLowerCase().includes(search)
                || exercise.bodyPart.toLocaleLowerCase().includes(search)
                || exercise.equipment.toLocaleLowerCase().includes(search)
            )
            setSearch('')
            setExercise(searchExercises.slice(0,9))

         } catch (error) {
             console.log(error);
         }
        }
     }

    return ( 
        <>
            <section className="flex flex-col items-center gap-y-12 p-5 w-full">
                <AnimationOnScroll animateIn="animate__rubberBand">
                    <h1 className="font-black text-2xl sm:text-3xl text-center text-slate-800 dark:text-slate-300">Awesome Exercises You<br/> Should Know</h1>
                </AnimationOnScroll>
                <div className="flex items-center sm:items-start w-full sm:w-[80%]  sm:flex-row gap-y-2 sm:gap-y-0">
                    <input 
                    value={search} onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())} 
                    type="text" placeholder="Search Exercises" />
                    <button onClick={searchHandler} 
                    className="text-sm sm:text-base duration-500 ring-offset-[#fdf4ff] dark:ring-offset-slate-800 bg-primary ml-3 hover:ring hover:ring-offset-2 hover:ring-primary text-white top-12 py-3 sm:py-2 px-3 sm:px-5 rounded-md">Search</button>
                </div>
            </section>
            <HorizontalScrollBar 
            data={bodyParts} 
            setBodypart={setBodypart} 
            isBodyParts
            bodyPart={bodyPart}/>
        </>
     );
}
 
export default SearchExercises;
