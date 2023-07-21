import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import NotFound from './pages/NotFound'

const routes = [
    {path:'/' , element:<Home />},
    {path:'/exercise/:id' , element:<ExerciseDetail/>},
    {path:'*', element:<NotFound/>}
]
export default routes