// import React, { useState } from 'react';
// import './style.css';

// const App = () => {

//   // const [value, setA] = useState(0);

//   // const increase = () => {
//   //   setA(value + 1);
//   // }

//   // const decrease = () => {
//   //   setA(value - 1);
//   // }

//   const [userName, setContent] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted');
//     setContent('');
//   }

//   return (
//     <div>
//       {/* <h1 className='bg-red-700'>Number is {value}</h1>
//       <button onClick={increase}>Incremenat</button>
//       <button onClick={decrease}>Decrement</button> */}

//       <form onSubmit={(e)=>{
//         submitHandler(e);
//       }}>
//         <input
//         value={userName}
//         onChange={(e)=>{
//           setContent(e.target.value);
//         }}
//         className='px-4 rounded py-3 text-xl m-5' 
//         type="text"  
//         placeholder='Enter your Name'/>

//         <button 
//         className='px-4 text-white py-3 m-5 
//           text-xl font-semibold bg-emerald-600 rounded'>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React , { useContext, useState }  from "react";
import "./style.css";
//import axios from "axios";
//import Load from "./components/Load";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Headers from "./components/Header";
import { DataContext } from "./context/UserContext";
//import Card from "./components/Card";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

const App = () => {
  // const users = [
  //   {
  //     "name": "Alice Johnson",
  //     "city": "New York",
  //     "age": 29,
  //     "profession": "Software Engineer",
  //     "profile_photo": "https://example.com/photos/alice.jpg"
  //   },
  //   {
  //     "name": "Bob Smith",
  //     "city": "Los Angeles",
  //     "age": 35,
  //     "profession": "Graphic Designer",
  //     "profile_photo": "https://example.com/photos/bob.jpg"
  //   },
  //   {
  //     "name": "Charlie Brown",
  //     "city": "Chicago",
  //     "age": 42,
  //     "profession": "Data Scientist",
  //     "profile_photo": "https://example.com/photos/charlie.jpg"
  //   },
  //   {
  //     "name": "Diana Green",
  //     "city": "San Francisco",
  //     "age": 27,
  //     "profession": "Marketing Specialist",
  //     "profile_photo": "https://example.com/photos/diana.jpg"
  //   },
  //   {
  //     "name": "Ethan White",
  //     "city": "Miami",
  //     "age": 31,
  //     "profession": "Photographer",
  //     "profile_photo": "https://example.com/photos/ethan.jpg"
  //   }
  // ]

  // const [data, setData] = useState([]);
  
  // const getData = async () => {
  //   const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
  //   setData(response.data);
  //   console.log(data[0].url);
  // }
  return (
    <>
      {/* <Navbar />
      <Footer /> */}
      {/* <h1>
        {users.map(function(ele,idx){
          return <Card key={idx} username={ele.name} age={ele.age} city={ele.city} image={ele.profile_photo} profile={ele.profession}/>
        })}
      </h1> */}
      {/* <div className="p-10">
        <button onClick={getData} className="bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">Get Data</button>
        <div className="p-5 mt-5 bg-gray-950">
          {data.map(function(elem,idx){
            return <Load key={idx} url={elem.download_url} author={elem.author}/>
          })}
        </div>
      </div> */}

      <div>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;