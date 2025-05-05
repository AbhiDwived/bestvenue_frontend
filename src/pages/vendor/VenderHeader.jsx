import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Briefcase,
  Store,
  Mail,
  Star,
  GraduationCap,
  Settings,
} from 'lucide-react';

const Header = () => {
  return (
    <>
    <div className="border-b p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 items-center">
        {/* Home */}
        <NavLink to="/vendor/dashboard" className="flex flex-col items-center text-sm text-gray-800">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block">Home</span>
        </NavLink>

        {/* Storefront */}
        <NavLink to="/vendor/Storefront" className="flex flex-col items-center text-sm text-gray-800">
          <Store className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block">Storefront</span>
        </NavLink>

        {/* Enquiries with badge */}
        <NavLink to="/vendor/enquiries" className="relative flex flex-col items-center text-sm text-gray-800">
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block">Enquiries</span>
          <span className="absolute -top-1 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            311
          </span>
        </NavLink>

        {/* Reviews */}
        <NavLink to="/reviews" className="flex flex-col items-center text-sm text-gray-800">
          <Star className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block">Reviews</span>
        </NavLink>

        {/* Campus with "NEW" tag */}
        <NavLink to="/campus" className="relative flex flex-col items-center text-sm text-gray-800">
          <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block">Campus</span>
          <span className="absolute -top-2 right-0 bg-yellow-400 text-white text-[10px] px-1 rounded font-semibold">
            NEW
          </span>
        </NavLink>

        {/* Settings */}
        <NavLink to="/settings" className="flex flex-col items-center text-sm text-gray-800">
          <Settings className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block">Settings</span>
        </NavLink>
      </div>

      {/* Storefront Progress */}
      <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
        <span className="text-red-600 text-sm text-center md:text-left">
          Complete your storefront
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">25%</span>
          <div className="w-32 bg-gray-300 h-2 rounded">
            <div className="bg-red-500 h-2 rounded" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
