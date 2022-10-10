import {Nav, SmallSidebar, BigSidebar} from "../components/index"
import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/SharedLayout"
import { useAppContext } from "../context/appContext"

const Layout = () => {

  return (
    <Wrapper>
    <main className='dashboard'>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Nav />
        <div className='dashboard-page'>
          
    <Outlet />
        </div>
      </div>
    </main>
  </Wrapper>

  )
}

export default Layout