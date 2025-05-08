import React, { useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const impressionsData = [
  { month: "Jan", value: 15 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 17 },
  { month: "Apr", value: 5 },
  { month: "May", value: 19 },
  { month: "Jun", value: 27 },
  { month: "Jul", value: 7 },
  { month: "Aug", value: 11 },
  { month: "Sep", value: 29 },
  { month: "Oct", value: 23 },
  { month: "Nov", value: 10 },
  { month: "Dec", value: 9 },
];

const leadsData = [
  { month: "Jan", value: 5 },
  { month: "Feb", value: 7 },
  { month: "Mar", value: 7 },
  { month: "Apr", value: 7 },
  { month: "May", value: 2 },
  { month: "Jun", value: 2 },
  { month: "Jul", value: 0 },
  { month: "Aug", value: 4 },
  { month: "Sep", value: 1 },
  { month: "Oct", value: 6 },
  { month: "Nov", value: 4 },
  { month: "Dec", value: 4 },
];

export default function AnalyticsChart() {
  const [chartData, setChartData] = useState(impressionsData);
  const [chartTitle, setChartTitle] = useState("Storefront Impressions");
  const [chartDescription, setChartDescription] = useState(
    "View the monthly Storefront impressions you received"
  );
  const chartRef = useRef(null);

  const total = chartData.reduce((acc, cur) => acc + cur.value, 0);

  const handleLeadsClick = () => {
    setChartData(leadsData);
    setChartTitle("Leads Received");
    setChartDescription("View the monthly leads you received on WeddingWire.");
    chartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImpressionsClick = () => {
    setChartData(impressionsData);
    setChartTitle("Storefront Impressions");
    setChartDescription("View the monthly Storefront impressions you received");
    chartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div
          className="bg-gray-100 p-4 rounded cursor-pointer hover:bg-gray-200 transition"
          onClick={handleImpressionsClick}
        >
          <p className="text-2xl font-bold text-center">
            {impressionsData.reduce((acc, cur) => acc + cur.value, 0)}
          </p>
          <p className="text-center text-gray-600">Storefront impressions</p>
        </div>
        <div
          className="bg-gray-100 p-4 rounded cursor-pointer hover:bg-gray-200 transition"
          onClick={handleLeadsClick}
        >
          <p className="text-xl text-center font-bold">
            {leadsData.reduce((acc, cur) => acc + cur.value, 0)}
          </p>
          <p className="text-center text-gray-600">Leads received</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-xl text-center font-bold">3</p>
          <p className="text-center text-gray-600">Phone number views</p>
        </div>
      </div>

      <div ref={chartRef}>
        <h3 className="text-lg font-semibold mb-2">{chartTitle}</h3>
        <p className="text-gray-600 mb-4">{chartDescription}</p>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="value" fill="#f44336" />
          </BarChart>
        </ResponsiveContainer>

        <p className="mt-4 text-sm">
          Last 12 months: <strong>{total}</strong> &nbsp;&nbsp;|&nbsp;&nbsp;
          Total: <strong>{total}</strong>
        </p>
      </div>
    </div>
  );
}
