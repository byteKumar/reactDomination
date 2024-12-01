import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="mr-14 bg-white text-black inline-block p-6 text-center rounded">
        <img className="ml-10 h-32 w-32 rounded-full mb-3" src={props.image} alt="" />
        <h1 className="text-2xl font-semibold mb-4">{props.username}</h1>
        <h2>{props.city}, {props.age}</h2>
        <button className="mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium">Add Friend</button>
      </div>
    </>
  );
};

export default Card;
