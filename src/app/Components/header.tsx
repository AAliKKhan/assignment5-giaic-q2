import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-blue-900 w-full h-[92px] flex justify-between items-center px-10">

      <div>
        <Image
          src="/logo.png"
          alt="Logo Here"
          width={191}
          height={34}
          className="object-contain"
        />
      </div>


      <div className="flex items-center space-x-12">
        <ul className="flex space-x-8 text-white text-sm font-medium">
          <li className="hover:text-blue-300 cursor-pointer">Products</li>
          <li className="hover:text-blue-300 cursor-pointer">Solutions</li>
          <li className="hover:text-blue-300 cursor-pointer">Resources</li>
          <li className="hover:text-blue-300 cursor-pointer">Pricing</li>
        </ul>


        <div className="flex space-x-4">
          <button className="bg-secondary text-blue-900 font-medium px-6 py-3 rounded-lg hover:bg-yellow-300">
            Login
          </button>
          <button className="bg-inter text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-600">
            Try Whitespace free →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
