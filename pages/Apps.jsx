import { useState } from "react"
import SmallCard from "../components/SmallCard"
import useAppData from "../hooks/useAppData"
import { CiSearch } from "react-icons/ci"
import AppsNotFound from "./errors/AppsNotFound"

const Apps = () => {
  const [appData] = useAppData()
  const [search, setSearch] = useState('')

  const trimmedSearch = search.trim().toLowerCase()

  const filteredApps = trimmedSearch ? appData.filter(app =>
    app.title.toLowerCase().includes(trimmedSearch)) : appData;


  return (
    <div className="max-w-11/12 mx-auto py-20">
      <h2 className="text-col-pry text-5xl font-bold text-center">Our All Applications</h2>
      <p className="text-[#627382] mt-4 text-xl text-center">Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className="flex justify-between items-center mt-10">
        <h4 className="font-semibold text-2xl text-col-pry">({filteredApps.length}) Apps Found</h4>

        <label className="input">
          <CiSearch className="size-5 ml-2.5 text-[627382]" />
          <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Apps" value={search} />
        </label>
      </div>

      {filteredApps.length === 0 && (<AppsNotFound setSearch={setSearch} />)}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredApps.map(appData => (
          <SmallCard key={appData.id} appData={appData} />
        ))}
      </div>
    </div>
  )
}

export default Apps