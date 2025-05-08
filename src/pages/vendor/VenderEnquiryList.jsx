// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const VenderEnquiryList = () => {
//   const [selected, setSelected] = useState([]);

//   const toggleSelectAll = () => {
//     if (selected.length === enquiries.length) {
//       setSelected([]);
//     } else {
//       setSelected(enquiries.map((e) => e.id));
//     }
//   };

//   const toggleSelect = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   const isAllSelected = selected.length === enquiries.length;

//   return (
//     <div className="flex h-screen bg-white">
//       {/* Sidebar */}
//       <div className="w-1/5 border-r p-4 space-y-6">
//         <ul className="text-sm space-y-3 font-medium">
//           <li className="flex items-center text-gray-700">
//             <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
//             Pending <span className="ml-auto text-gray-500">393</span>
//           </li>
//           <li className="flex items-center text-gray-700">
//             <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//             Replied <span className="ml-auto text-gray-500">26</span>
//           </li>
//           <li className="flex items-center text-gray-700">
//             <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
//             Booked <span className="ml-auto text-gray-500">0</span>
//           </li>
//           <li className="flex items-center text-gray-700">
//             <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
//             Discarded <span className="ml-auto text-gray-500">8</span>
//           </li>
//         </ul>

//         <div className="text-xs uppercase text-gray-500 font-bold">Tools</div>
//         <ul className="text-sm space-y-2 mt-2">
//           <li>
//             <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:underline">
//               <span>⚙️</span> <span>Settings</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/templates" className="flex items-center space-x-2 text-gray-700 hover:underline">
//               <span>📄</span> <span>Templates</span>
//             </Link>
//           </li>
//           <li className="flex items-center space-x-2 text-orange-500 font-semibold mt-2 cursor-pointer">
//             <span>💼</span> <span>Export leads</span>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={isAllSelected}
//               onChange={toggleSelectAll}
//               className="w-4 h-4"
//             />
//             <span className="text-sm font-medium">Select all</span>
//           </div>

//           {selected.length > 0 ? (
//             <div className="flex space-x-4 text-sm font-medium">
//               <button className="text-gray-700 hover:underline">Move to</button>
//               <button className="text-gray-700 hover:underline">Mark as</button>
//               <button className="text-red-500 hover:underline">Delete</button>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-3">
//               <span className="text-sm text-blue-600 underline cursor-pointer">Advanced search</span>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Find"
//                   className="border px-4 py-1.5 rounded-full text-sm pl-8"
//                 />
//                 <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Enquiry Cards */}
//         <div className="space-y-4">
//           {enquiries.map((enquiry) => (
//             <div key={enquiry.id} className="border-t pt-4 flex justify-between items-start">
//               <div className="flex items-start space-x-4">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(enquiry.id)}
//                   onChange={() => toggleSelect(enquiry.id)}
//                   className="mt-2"
//                 />
//                 {enquiry.avatar ? (
//                   <img
//                     src={enquiry.avatar}
//                     alt={enquiry.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
//                     {enquiry.initials}
//                   </div>
//                 )}
//                 <div>
//                   <div className="font-medium">{enquiry.name}</div>
//                   <div className="text-xs text-gray-500">
//                     On {enquiry.date} · <span className="text-orange-500">{enquiry.status}</span>
//                   </div>
//                   <div className="text-sm text-gray-700 mt-1 line-clamp-1">{enquiry.message}</div>
//                 </div>
//               </div>
//               <div className="text-right text-sm space-y-1">
//                 <div className="text-gray-600">👥 {enquiry.guests}</div>
//                 <div className="text-gray-600">📅 {enquiry.eventDate}</div>
//                 <Link to="/vendor/storefront" className="text-blue-600 hover:underline block">
//                   View Storefront
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenderEnquiryList;