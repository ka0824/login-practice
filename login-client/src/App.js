import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Loggined from "../src/components/Loggined/Loggined";
import SignUp from "../src/components/SignUp/SignUp";
import logo from './logo.svg';
import '../src/css/App.css';

function App() {

  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const routeHandler = () => {
    navigate("/signup")
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={
              <div className="login-box">
                <div className="id-box">
                  <div className="texts">Id</div>
                  <input></input>
                </div>
                <div className="password-box">
                  <div className="texts">Password</div>
                  <input></input>
                </div>
                <div className="buttons">
                  <div className="buttons-text">로그인</div>
                  <div className="buttons-text" onClick={routeHandler}>회원가입</div>
                </div>
              </div>
          }/> 
          <Route path="/loggined" element={<Loggined />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        
    </div>
  );
}

export default App;
