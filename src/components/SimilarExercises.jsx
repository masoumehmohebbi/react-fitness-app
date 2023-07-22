import HorizontalScrollBar from './HorizontalScrollBar'
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    return ( 
        <section>
           <h1>Exercises that target the same muscle group</h1>

           {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>
           : 'Loading'}
        </section>
     );
}
 
export default SimilarExercises;