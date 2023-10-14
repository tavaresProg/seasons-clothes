import { Outlet } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'


function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Sidebar/>
      <Footer />
    </div>
  )
}

export default App