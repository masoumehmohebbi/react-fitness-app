import { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import { FetchData, exerciseOptions } from "../../utils/fetchData";

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

  }, [bodyPart]);

    return (  
        <div className="overflow-x-hidden">
            <h1 className="text-xl sm:text-2xl ml-5 font-black mt-16 text-slate-800 dark:text-slate-300">Showing Results</h1>
            <section className="mt-9 flex flex-wrap w-full justify-evenly gap-5" id="exercises">
                {exercise.map((exc, index) =>(
                <ExerciseCard key={index} exercise={exc}/>
                ))}

            </section>

            <div className="w-full flex items-center justify-start ml-20 py-4">
                <a className="font-semibold text-base sm:text-lg text-slate-800 dark:text-slate-300 hover:text-primary dark:hover:text-primary duration-500" href="#">More ? Show all results ...</a>
            </div>
        </div>
    );
}
 
export default Exercises;