import { Link } from "react-router-dom";

const stats = [
  { label: "Leads received", value: 49, icon: "✉️", href: "/leads" },
  { label: "Reviews", value: 0, icon: "⭐", href: "/reviews" },
  { label: "Storefront impressions", value: 195, icon: "👁️", href: "/impressions" },
  { label: "Phone number views", value: 3, icon: "📞", href: "/phone-views" },
];

export default function VenderNavbar() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Link
            to={stat.href}
            key={idx}
            className="text-center cursor-pointer hover:bg-gray-100 transition rounded-lg p-4 block"
          >
            <div className="text-3xl">{stat.icon}</div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
            <div className="text-sm text-gray-500">in the last 12 months</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
