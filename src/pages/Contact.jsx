import React from "react";
import { DataContext } from "../context/UserContext";

const Contact = () => {
    const data = React.useContext(DataContext);
    return (
        <>
            <h1>Contact Page - {data}</h1>
        </>
    )
}

export default Contact;