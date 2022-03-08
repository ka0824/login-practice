import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Loggined from "../src/components/Loggined/Loggined";
import SignUp from "../src/components/SignUp/SignUp";
import logo from './logo.svg';
import '../src/css/App.css';

function App() {

  const [userInfo, setUserInfo] = useState({});
  const [input, setInput] = useState({
    id: "",
    password: ""
  })
  const navigate = useNavigate();

  const routeHandler = () => {
    navigate("/signup")
  }

  const getUser = async (userInfo) => {
    const { id, password } = userInfo;

    try {

      const response = await axios.post('http://localhost:3001/user/signin', {
        id: id,
        password: password
      })
      navigate('/loggined');
    } catch (err) {
      const status = err.response.status;
      if (status === 403) {
        alert('입력한 정보를 다시 한번 확인해 주세요.');
      } else {
        alert('서버에 문제가 발생했습니다. 잠시만 기다려주세요');
      }
    }
    
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={
              <div className="login-box">
                <div className="id-box">
                  <div className="texts">Id</div>
                  <input onBlur={(e) => setInput({ ...input, id: e.target.value})}></input>
                </div>
                <div className="password-box">
                  <div className="texts">Password</div>
                  <input onBlur={(e) => setInput({ ...input, password: e.target.value})}></input>
                </div>
                <div className="buttons">
                  <div className="buttons-text" onClick={() => getUser(input)}>로그인</div>
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
