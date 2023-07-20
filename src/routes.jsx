import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

const routes = [
    {path:'/' , element:<Home basename="/react-fitness-app"/>},
    {path:'/exercise/:id' , element:<ExerciseDetail/>}
]
export default routes