import React from "react";
import './styles/style.css'
//import logo from './logo.svg';
import Test from "./components/postList";
import User from "./components/userList"

function App() {
  const id = 10;

  return (
    <div className="main">
      <User id={id} />
    </div>
  );
}

export default App;
