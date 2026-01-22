import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const ContactPage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      ContactPage
      <Link to={"/about"}>
        <button className="border p-2 cursor-pointer">About Page</button>
      </Link>
      <Link to={"/"}>
        <button className="border p-2 cursor-pointer">Home Page</button>
      </Link>
    </div>
  );
};

export default ContactPage;
