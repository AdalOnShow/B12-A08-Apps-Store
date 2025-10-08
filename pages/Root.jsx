import { Outlet } from 'react-router';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
const Root = () => {
  return (
    <div className = "bg-[#f5f5f5]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root