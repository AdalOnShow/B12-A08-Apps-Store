import { FaGithub } from "react-icons/fa6"
import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
              <li><NavLink to='/apps' className={({ isActive }) => isActive ? "active-link" : ""}>Apps</NavLink></li>
              <li><NavLink to='/installation' className={({ isActive }) => isActive ? "active-link" : ""}>Installation</NavLink></li>
            </ul>
          </div>
          <NavLink to='/' className="text-xl flex-center gap-1">
            <img src="/logo.png" alt="" className="size-10" />
            <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">HERO.IO</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 menu-horizontal px-1 font-medium">
            <li><NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to='/apps' className={({ isActive }) => isActive ? "active-link" : ""}>Apps</NavLink></li>
            <li><NavLink to='/installation' className={({ isActive }) => isActive ? "active-link" : ""}>Installation</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="flex-center btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
            <FaGithub size={20} />
            <span>Contribute</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar