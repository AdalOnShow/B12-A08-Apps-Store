import { Link } from "react-router"
import SmallCard from "../../components/SmallCard"
import useAppData from "../../hooks/useAppData"
import Loading from "../../components/Loading"

const TrendingApp = () => {
  const [appData, loading] = useAppData()

  const eighthData = appData.slice(2, 10)


  return (
    <div className="max-w-11/12 mx-auto py-20">
      <h2 className="text-col-pry text-5xl font-bold text-center">Trending Apps</h2>
      <p className="text-[#627382] mt-4 text-xl text-center">Explore All Trending Apps on the Market developed by us</p>

      <div className="relative">
        {loading && (<Loading />)}
      </div>
      
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {eighthData.map(appData => (
          <SmallCard key={appData.id} appData={appData} />
        ))}
      </div>

      <div className="flex-center">
        <Link to="/apps" className="btn px-10 !py-[15px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
          <span>Show All</span>
        </Link>
      </div>
    </div>
  )
}

export default TrendingApp