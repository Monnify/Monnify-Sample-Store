

import React from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import logo from '../assets/logo.png'

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center p-4 bg-white text-gray-400">
    {/* <h1 className="text-xl font-bold">Brand Logo</h1> */}
    <img src={logo} alt="Product" className="" width={150} height={70} />
 
    <div className="flex gap-4">
      <FaCartPlus className="text-xl cursor-pointer" />
      <FaUser className="text-xl cursor-pointer" />
    </div>
  </nav>
);

export default Navbar;
