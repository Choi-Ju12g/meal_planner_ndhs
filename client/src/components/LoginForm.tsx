//import React, {useState} from 'react';
//import styled from 'styled-components';
import '../statics/css/LoginForm.css';
import profile from "../statics/images/a.png";
import email from "../statics/images/email.jpg";
import pass from "../statics/images/pass.png";

export function LoginForm(){

  function login(){
    
  }

    return(
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="남도학숙 아이디" className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="남도학숙 비밀번호" className="name"/>
          </div>
          <div className="login-button">
          <button>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}


    // return (
    // <LoginContainer className='login_container'>
    //   <InputForm placeholder='남도학숙 아이디를 적어주세요'></InputForm>
    //   <InputForm placeholder='남도학숙 비밀번호를 적어주세요'></InputForm>
    // </LoginContainer>
    // )
// const LoginContainer = styled.div`
//     @media screen and (max-width: 500px) {
//         position: relative;
//         overflow: hidden;
//         text-align:center;
//         width: 90%;
//         height: 40vh;
//         margin: 20px;
//         padding: 5px;
//         border: solid 1px gray;
//         background: gray;
//         box-sizing: border-box;
// }
// `

// const InputForm  = styled.input`
//     @media screen and (max-width: 500px) {
//         position: relative;
//         overflow: hidden;
//         width: 100%;
//         height: 40px;
//         margin: 0 0 8px;
//         padding: 5px 39px 5px 11px;
//         border: solid 1px #dadada;
//         background: #fff;
//         box-sizing: border-box;
//     }
// `;