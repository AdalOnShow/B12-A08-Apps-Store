import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router"

const Footer = () => {
  return (
    <div className="bg-[#001931] w-full py-10 text-white">
      <div className="flex justify-between items-center max-w-11/12 mx-auto ">
        <Link to='/' className="text-xl flex-center gap-1">
          <img src="/logo.png" alt="" className="size-10" />
          <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">HERO.IO</span>
        </Link>

        <div className="flex flex-col gap-4">
          <h4 className="font-medium text-xl">Social Links</h4>
          <div className="flex-center gap-4">
            <Link className="flex-center bg-white rounded-full text-black size-[24px] p-1"><FaXTwitter size={20} /></Link>
            <Link className="flex-center bg-white rounded-full text-black size-[24px] p-1"><FaLinkedinIn size={20} /></Link>
            <Link className="flex-center bg-white rounded-full text-black size-[24px] p-1"><FaFacebookF size={20} /></Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-11/12 mx-auto border-t border-gray-400 mt-5 flex-center !text-[#FAFAFA] pt-7">
        Copyright © 2025 - All right reserved
      </div>
    </div>
  )
}

export default Footer