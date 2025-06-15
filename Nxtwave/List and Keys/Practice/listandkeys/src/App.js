import React from "react";
import UserProfile from "./Components/UserProfile/index";
import "./App.css";

const userDetailsList = [
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Raju",
    role: "ReactJs Developer",
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd",
    role: "Backend Developer",
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob",
    role: "Full Stack Developer",
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon",
    role: "UI/UX Designer",
  },
];

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map((user, index) => (
        <UserProfile key={index} userDetails={user} />
      ))}
    </ul>
  </div>
);

export default App;
