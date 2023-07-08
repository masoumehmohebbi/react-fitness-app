import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

const routes = [
    {path:'/' , element:<Home/>},
    {path:'/exercise/:id' , element:<ExerciseDetail/>}
]
export default routes