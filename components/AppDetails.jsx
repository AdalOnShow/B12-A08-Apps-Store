import { useParams } from "react-router";
import useAppData from "../hooks/useAppData";
import downloadIcon from "../src/assets/icon-downloads.png";
import ratingsIcon from "../src/assets/icon-ratings.png";
import reviewIcon from "../src/assets/icon-review.png"
import { formatNumber } from "../utility/utils";
import AppsNotFound from "../pages/errors/AppsNotFound";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const AppDetails = () => {
  const id = parseInt(useParams().id);

  const [appData] = useAppData();
  const app = appData.find(app => app.id === id) || {};

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;



  return (

    !app.id ? (<AppsNotFound />) :

      <div className="bg-[#f5f5f5] py-10">
        <div className="max-w-11/12 mx-auto">
          <div className="w-full flex items-center gap-10 flex-col lg:flex-row">
            <div className="w-[350px] h-[350px] flex-center rounded-lg bg-white shadow-md">
              <img src={image} alt={title} className="w-full h-full bg-contain rounded-lg" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-4xl text-col-pry">{title}</h2>
              <p className="mt-2 text-xl text-[#627382]">Developed by <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold">{companyName}</span></p>

              <div className="w-full border-t border-[#c4c9ce] my-8" />

              <div className="flex items-center gap-20">
                <div className="space-y-2">
                  <img src={downloadIcon} alt={title} />
                  <p className="text-col-pry">Downloads</p>
                  <h4 className="text-col-pry font-extrabold text-[40px]/10">{formatNumber(downloads)}</h4>
                </div>
                <div className="space-y-2">
                  <img src={ratingsIcon} alt={title} />
                  <p className="text-col-pry">Average Ratings</p>
                  <h4 className="text-col-pry font-extrabold text-[40px]/10">{ratingAvg}</h4>
                </div>
                <div className="space-y-2">
                  <img src={reviewIcon} alt={title} />
                  <p className="text-col-pry">Total Reviews</p>
                  <h4 className="text-col-pry font-extrabold text-[40px]/10">{formatNumber(reviews)}</h4>
                </div>
              </div>

              <button className="mt-6 bg-[#00d390] text-white font-semibold text-xl px-5 py-3.5 rounded-md cursor-pointer">Install Now ({size} MB)</button>
            </div>
          </div>

          <div className="w-full border-t border-[#c4c9ce] my-10" />

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={ratings}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} />

              <XAxis
                dataKey="count"
                type="number"
                stroke="#999"
              />

              <YAxis
                dataKey="name"
                type="category"
                stroke="#999"
                reversed={true}
              />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#FF8811"
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="w-full border-t border-[#c4c9ce] my-10" />
          <h4 className="font-semibold text-2xl text-col-pry mb-5">Description</h4>
          <div className="space-y-4">
            <p className="text-[#627382] text-xl">{description}</p>
            <p className="text-[#627382] text-xl">{description}</p>
            <p className="text-[#627382] text-xl">{description}</p>
          </div>
        </div>
      </div>
  )
}

export default AppDetails