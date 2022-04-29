import { useState } from 'react';
import '../statics/css/LoginForm.css';
import profile from "../statics/images/a.png";
import email from "../statics/images/email.jpg";
import pass from "../statics/images/pass.png";

export function LoginForm() {
  const [inputID, setInputID] = useState('');
  const [inputPW, setInputPW] = useState('');

  function onCLicklogin(): void {

      fetch('/api/data')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="남도학숙 아이디" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="남도학숙 비밀번호" className="name" />
            </div>
            <div className="login-button">
              <button type='button'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}