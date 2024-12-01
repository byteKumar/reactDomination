import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-emerald-500 flex px-10 py-5 items-center justify-between">
        <h2 className="text-2xl">Chaman Kumar</h2>
        <div className="flex gap-8 items-center justify-center">
          <h4 className="text-xl">Acount</h4>
          <h4 className="text-xl">Contacts</h4>
          <h4 className="text-xl">Services</h4>
          <h4 className="text-xl">Your Account</h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
