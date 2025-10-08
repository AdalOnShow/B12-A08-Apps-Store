import { Link } from "react-router"
import AppError from "../../src/assets/App-Error.png"


const AppsNotFound = ({ setSearch }) => {
  return (
    <div className="min-h-[40dvh] flex flex-col">
      <div className="flex-1 max-w-11/12 mx-auto py-10 flex flex-col items-center justify-center">
        <img src={AppError} alt="" className="flex-1 max-h-[400px]" />
        <h2 className="text-col-pry text-5xl font-bold text-center mt-5">OPPS!! APP NOT FOUND</h2>
        <p className="text-[#627382] mt-4 text-xl text-center">The App you are requesting is not found on our system.  please try another apps</p>
        <Link to="/apps" onClick={() => setSearch("")} className="mx-auto btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold mt-5">
          <span>Go Back!</span>
        </Link>
      </div>
    </div>
  )
}

export default AppsNotFound