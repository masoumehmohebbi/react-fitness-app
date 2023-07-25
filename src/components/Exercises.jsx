/* eslint-disable react/prop-types */
import { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import { FetchData, exerciseOptions } from "../../utils/fetchData";
import { Link } from "react-router-dom";

const Exercises = ({exercise, setExercise, bodyPart}) => {

  useEffect(() =>{
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart==='all') {
        exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercise(exercisesData.data.slice(0,9));
    }
    fetchExercisesData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart]);

    return (  
      <div className="overflow-x-hidden">
            <h1 id="showingExercises" className="text-xl sm:text-2xl ml-5 font-black mt-16 text-slate-800 dark:text-slate-300">Showing Results</h1>
            <section className="mt-9 flex flex-wrap w-full justify-evenly gap-5" id="exercises">
                {exercise.map((exc, index) =>(
                <ExerciseCard key={index} exercise={exc}/>
                ))}

            </section>
            
        </div>
    );
}

export default Exercises;
