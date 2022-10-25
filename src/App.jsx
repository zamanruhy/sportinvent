import './styles/base.css'
import './styles/common.css'
// import './styles/magnifier.css'
import { Route, Routes } from '@solidjs/router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
// import About from './pages/About'
import Card from './pages/Card'
import './styles/main.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        {/* <Route path={'/about'} element={<About />} /> */}
        <Route path={'/card'} element={<Card />} />
      </Routes>
    </Layout>
  )
}
