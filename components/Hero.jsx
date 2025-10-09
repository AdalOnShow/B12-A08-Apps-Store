import apple from "../src/assets/apple-app.png";
import google from "../src/assets/google-play.png";
import hero from "../src/assets/hero.png";

const Hero = () => {
  return (
    <div className="max-w-11/12 mx-auto pt-20 text-center">
      <h2 className="text-col-pry text-3xl md:text-5xl lg:text-7xl font-bold">We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Productive</span> Apps</h2>

      <p className="mt-4 text-[#627382] text-base md:text-xl">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className="hidden md:block" />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

      <div className="flex-center flex-col md:flex-row py-10 gap-4">
        <a href="https://play.google.com/" target="_blank" className="hover:shadow-md hover:scale-x-105 transition-all duration-300"><button className="cursor-pointer flex-center gap-2.5 py-3 px-[20px] border border-[#D2D2D2] rounded-md"><img src={google} alt="" className="size-5" /><span className="font-semibold text-xl text-col-pry">Google Play</span></button></a>

        <a href="https://www.apple.com/app-store/" target="_blank" className="hover:shadow-md hover:scale-x-105 transition-all duration-300"><button className="cursor-pointer flex-center gap-2.5 py-3 px-[20px] border border-[#D2D2D2] rounded-md"><img src={apple} alt="" className="size-5" /><span className="font-semibold text-xl text-col-pry">App Store</span></button></a>
      </div>

      <div className="max-w-[850px] mx-auto h-auto">
        <img src={hero} alt="" className="bg-contain" />
      </div>
    </div>
  )
}

export default Hero