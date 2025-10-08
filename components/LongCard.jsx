import { delInstallDB, formatNumber } from "../utility/utils";
import { FaStar } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";


const LongCard = ({ id, image, title, size, ratingAvg, downloads }) => {
  const handleInstall = (id) => {
    delInstallDB(id)
  }
  return (
    <div className="flex justify-between items-center bg-white w-full rounded-md gap-4">
      <div className="flex-center gap-4 p-4">
        <img src={image} alt={title} className="size-20 rounded-md" />
        <div className="flex flex-col gap-4 items-start">
          <h4 className="text-xl text-col-pry font-medium">{title}</h4>
          <div className="flex-center gap-4">
            <div className="flex-center gap-1 text-[#00D390] font-medium">
              <BsDownload size={16} />
              {formatNumber(downloads)}
            </div>
            <div className="flex-center gap-1 text-[#FF8811] font-medium">
              <FaStar size={16} />
              {ratingAvg}
            </div>
            <p className="text-[#627382]">{size} MB</p>
          </div>
        </div>
      </div>
      <button onClick={() => handleInstall(id)} className="mt-6 bg-[#00d390] text-white font-semibold text-xl px-5 py-3.5 rounded-md cursor-pointer pl-4">Uninstall</button>
    </div>
  )
}

export default LongCard