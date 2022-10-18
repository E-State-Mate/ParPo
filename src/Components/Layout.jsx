import Header from './Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div id='app-container'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout