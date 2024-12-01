import React from "react";

const Load = (props) => {
  return (
    <>
      <div
        className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3"
      >
        <img className="h-40" src={props.url} alt="" />
        <h1>{props.author}</h1>
      </div>
    </>
  );
};

export default Load;