import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import {FetchData, exerciseOptions } from "../../utils/fetchData";
import { useLocation } from "react-router";

const ExerciseDetail = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    const [exerciseDetail, setExerciseDetail] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        const fetchExercusesData = async () =>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

            const exerciseDetailsData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
            exerciseOptions);
            setExerciseDetail(exerciseDetailsData.data)
        }

        fetchExercusesData()
    },[id])

    return ( 
    <>
        <Detail exerciseDetail = {exerciseDetail}/>
    </>
    );
}
 
export default ExerciseDetail;