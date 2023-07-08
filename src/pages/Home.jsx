import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises'
const Home = () => {
    return (
        <main className=''>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises/>
        </main>
    );
}
 
export default Home;