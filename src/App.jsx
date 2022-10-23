import { Route, Routes } from '@solidjs/router'
// import './main.css'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </Layout>
  )
}
