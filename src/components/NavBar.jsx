import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between px-12 py-4 border-2 border-black">
      <h1>Uday Kumar</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Testimonial</li>
        <li>Blog</li>
        <li>
          <button>Contact us</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
