import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import routes from './routes'
import Home from './pages/Home'

function App() {
  return (
    <div className='font-serif bg-[#fdf4ff] dark:bg-slate-800 duration-100 '>
      <Layout>
        <Routes>
          <Home/>
          {routes.map((route) => (
            <Route {...route} key={route.element}/>
          ))}
        </Routes>
      </Layout>
    </div>
  )
}

export default App
