import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/blogdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            BlogDetails
          </Link>
        </li>
       
        <li style={{ marginBottom: "10px" }}>
          <Link to="/bloggerdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            BloggerDetails
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

//just ignore this page and contact page same goes for backend router i have additinally added user routes but having some trouble implementing feature