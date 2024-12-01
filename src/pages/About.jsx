import { useContext } from "react";
import { DataContext } from "../context/UserContext";

const About = () => {
    const data = useContext(DataContext);
    return (
        <>
            <h1>About Page - {data}</h1>
        </>
    )
}

export default About;