import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
// import MessagesPage from "../component/MessagesPage";

const data = [
  { month: "Jan", impressions: 15 },
  { month: "Feb", impressions: 25 },
  { month: "Mar", impressions: 17 },
  { month: "Apr", impressions: 5 },
  { month: "May", impressions: 19 },
  { month: "Jun", impressions: 27 },
  { month: "Jul", impressions: 7 },
  { month: "Aug", impressions: 11 },
  { month: "Sep", impressions: 29 },
  { month: "Oct", impressions: 23 },
  { month: "Nov", impressions: 10 },
  { month: "Dec", impressions: 9 },
];

export default function AnalyticsChart() {
  const total = data.reduce((acc, cur) => acc + cur.impressions, 0);

  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-2xl font-bold text-center">{total}</p>
          <p className="text-center text-gray-600">Storefront impressions</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-xl text-center font-bold">49</p>
          <p className="text-center text-gray-600">Leads received</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-xl text-center font-bold">3</p>
          <p className="text-center text-gray-600">Phone number views</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Storefront impressions</h3>
      <p className="text-gray-600 mb-4">
        View the monthly Storefront impressions you received
      </p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="impressions" fill="#f44336" />
        </BarChart>
      </ResponsiveContainer>

      <p className="mt-4 text-sm">
        Last 12 months: <strong>{total}</strong> &nbsp;&nbsp;|&nbsp;&nbsp; Total:{" "}
        <strong>{total}</strong>
      </p>
          </div>
          {/* <div><MessagesPage/></div> */}
          </>
         );
    
}