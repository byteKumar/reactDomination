import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="py-7 px-10 bg-emerald-600 flex items-center justify-between text-white">
        <h2 className="text-2xl">Chaman Kumar</h2>
        <div className="flex gap-10">
            <Link to="/home" className="text-xl ml-5">Home</Link>
            <Link to="/about" className="text-xl ml-5">About</Link>
            <Link to="/contact" className="text-xl ml-5">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;