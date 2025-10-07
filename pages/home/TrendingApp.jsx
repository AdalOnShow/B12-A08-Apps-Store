import useAppData from "../../hooks/useAppData"

const TrendingApp = () => {
  const [appData, loading, error] = useAppData()

  const eigthData = appData.slice(0, 8)


  return (
    <div className="max-w-11/12 mx-auto py-20">
      <h2 className="text-col-pry text-5xl font-bold text-center">Trending Apps</h2>
      <p className="text-[#627382] mt-4 text-xl text-center">Explore All Trending Apps on the Market developed by us</p>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {}
      </div>
    </div>
  )
}

export default TrendingApp