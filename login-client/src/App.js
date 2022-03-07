import axios from "axios";
import logo from './logo.svg';
import '../src/css/App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
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
            <div className="buttons-text">회원가입</div>
          </div>

        </div>
    </div>
  );
}

export default App;
