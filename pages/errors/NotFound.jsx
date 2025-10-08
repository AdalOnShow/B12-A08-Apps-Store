import { Link } from "react-router"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Error from "../../src/assets/error-404.png"

function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-11/12 mx-auto py-10 flex flex-col items-center justify-center">
        <img src={Error} alt="" className="flex-1 h-full" />
        <h2 className="text-col-pry text-5xl font-bold text-center mt-5">Oops, page not found!</h2>
        <p className="text-[#627382] mt-4 text-xl text-center">The page you are looking for is not available.</p>
        <Link to="/" className="mx-auto btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold mt-5">
          <span>Go Back!</span>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound