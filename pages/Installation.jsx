import { BsDownload } from "react-icons/bs";
import useAppData from "../hooks/useAppData"
import { delInstallDB, formatNumber, getInstallDB } from "../utility/utils";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from './../components/Loading';

const Installation = () => {

  const [appsData, loading] = useAppData();
  const [installedApps, setInstalledApps] = useState(() => getInstallDB())
  const [sortOrder, setSortOrder] = useState('none')

  const installedAppData = appsData.filter(app => installedApps.includes(app.id))

  const handleUninstall = (id) => {
    Swal.fire({
      title: "Do you want to uninstall this app?",
      showCancelButton: true,
      confirmButtonText: "Yes, Uninstall",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("App uninstall successful!", "", "success");
        delInstallDB(id)
        setInstalledApps(getInstallDB())
      }
    });
  }

  const sortedApps = (() => {
    if (sortOrder === "asc") {
      return [...installedAppData].sort((a, b) => a.downloads - b.downloads)
    } else if (sortOrder === "dse") {
      return [...installedAppData].sort((a, b) => b.downloads - a.downloads)
    } return [...installedAppData]
  })()

  console.log(sortedApps)

  return (
    <div className="max-w-11/12 mx-auto py-20">
      <h2 className="text-col-pry text-5xl font-bold text-center">Your Installed Apps</h2>
      <p className="text-[#627382] mt-4 text-xl text-center">Explore All Trending Apps on the Market developed by us</p>

      <div className="flex justify-between items-center mt-10">
        <h4 className="font-semibold text-2xl text-col-pry">({installedAppData.length}) Apps Found</h4>

        <label className="form-contole w-full max-w-xs">
          <select className="select select-bordered" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="none">Sort By Downloads</option>
            <option value="asc">Low &gt; High</option>
            <option value="dsc">High &gt; Low</option>
          </select>
        </label>
      </div>
      <div className="relative w-full flex flex-col gap-4 mt-4">
        {loading && <Loading full />}
        {sortedApps.map(({ id, image, title, size, ratingAvg, downloads }, i) => (
          <div key={i} className="flex flex-col md:flex-row justify-between items-center bg-white w-full rounded-md gap-4 p-4">
            <div className="flex-center gap-4">
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
            <button onClick={() => handleUninstall(id)} className="bg-[#00d390] text-white font-semibold text-xl px-5 py-3.5 rounded-md cursor-pointer pl-4 w-full md:w-40">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Installation