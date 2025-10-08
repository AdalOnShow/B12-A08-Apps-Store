import { BsDownload } from "react-icons/bs"
import { formatNumber } from "../utility/utils"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router"

const SmallCard = ({ appData }) => {

  const { id, title, downloads, image, ratingAvg } = appData

  return (
    <Link to={`/app-details/${id}`}>
      <div className="p-4 bg-white rounded-[4px] shadow-md hover:scale-[102%] transition-all duration-300 cursor-pointer">
        <div className="w-full h-[300px] flex-center rounded-lg">
          <img src={image} alt={title} className="w-full h-full bg-contain rounded-lg" />
        </div>
        <h4 className="text-col-pry font-medium text-xl my-4">{title}</h4>
        <div className="flex items-center justify-between">
          <div className="flex-center gap-2 px-2.5 py-1.5 rounded-md bg-[#f1f5e8] text-[#00D390] font-medium">
            <BsDownload size={14} />
            {formatNumber(downloads)}
          </div>
          <div className="flex-center gap-2 px-2.5 py-1.5 rounded-md bg-[#FFF0E1] text-[#FF8811] font-medium">
            <FaStar size={14} />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SmallCard