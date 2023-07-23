import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import { useParams } from "react-router-dom";
import {FetchData, exerciseOptions } from "../../utils/fetchData";
import { youtubeOptions } from "../../utils/fetchData";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
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
        }

        fetchExercusesData()
    },[id])

    return ( 
    <>
        <Detail exerciseDetail = {exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    </>
    );
}
 
export default ExerciseDetail;