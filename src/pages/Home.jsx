import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Home = () => {
    const data = useContext(DataContext)
    return (
        <>
            <h1>Home Page - {data}</h1>
        </>
    )
}

export default Home;