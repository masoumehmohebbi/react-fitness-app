/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ExerciseCard = ({exercise}) => {
    return ( 
            <Link to={`/exercise/${exercise.id}`} className="bg-white shadow-md shadow-[#f5d0fe] p-5 rounded-md my-3">
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="rounded-xl w-[300px] h-auto" />
                <div className="flex gap-x-3 mt-4">
                    <button className="text-white rounded-lg bg-secondary p-2">{exercise.bodyPart}</button>
                    <button className="text-white rounded-lg bg-primary p-2">Target:{ exercise.target}</button>
                    {/* <button className="rounded-lg border-2 border-primary p-2">Equipment:{exercise.equipment}</button> */}
                </div>
                <p className="mt-3 font-medium text-slate-800">{exercise.name}</p>
            </Link>
     );
}
 
export default ExerciseCard;