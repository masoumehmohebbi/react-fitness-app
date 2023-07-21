import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises'
import { useState } from 'react';
import Class from '../components/Class';
import Reasons from '../components/Reasons';

const Home = () => {
    const [exercise , setExercise] = useState([])
    const [bodyPart, setBodypart] = useState('all')

    return (
        <main
            className=''>
                <HeroBanner/>
                <Class/>
                <Reasons/>
                <SearchExercises
                    setExercise={setExercise}
                    bodyPart={bodyPart}
                    setBodypart = {setBodypart}
                />
                <Exercises
                    setExercise={setExercise}
                    bodyPart={bodyPart}
                    exercise={exercise}/>
        </main>
    );
}
 
export default Home;
