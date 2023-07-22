import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import {FetchData, exerciseOptions } from "../../utils/fetchData";
import { youtubeOptions } from "../../utils/fetchData";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises , setEquipmentExercises] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        const fetchExercusesData = async () =>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailsData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
            exerciseOptions);
            setExerciseDetail(exerciseDetailsData.data)

            const exercisesVideosData = await FetchData(
                `${youTubeSearchUrl}/search?query=${exerciseDetailsData.data.name} exercise`,
                youtubeOptions
              );
            setExerciseVideos(exercisesVideosData.data.contents)

            const targetMuscleExercisesData = await FetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
                exerciseOptions
              );
              setTargetMuscleExercises(targetMuscleExercisesData.data);

              const equimentExercisesData = await FetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
                exerciseOptions
              );
              setEquipmentExercises(equimentExercisesData.data);
        }

        fetchExercusesData()
    },[id])

    return ( 
    <>
        <Detail exerciseDetail = {exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscleExercises = {targetMuscleExercises}
        equipmentExercises = {equipmentExercises}/>
    </>
    );
}
 
export default ExerciseDetail;