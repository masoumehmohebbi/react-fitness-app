import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import routes from './routes'

function App() {
  return (
    <div className='pt-2  font-serif'>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.element}/>
          ))}
        </Routes>
      </Layout>
    </div>
  )
}

export default App
