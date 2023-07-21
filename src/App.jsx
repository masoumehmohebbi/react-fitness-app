import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import routes from './routes'

function App() {
  return (
    <div className='bg-[#fdf4ff] font-serif dark:bg-slate-800 duration-100'>
      <Layout>
        <Routes >
          {routes.map((route) => (
              <Route {...route} key={route.element}/>
          ))}
        </Routes>
      </Layout>
    </div>
  )
}

export default App
