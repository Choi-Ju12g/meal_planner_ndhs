import profile from "../statics/images/a.png";
import email from "../statics/images/email.jpg";
import pass from "../statics/images/pass.png";
import styled from 'styled-components';

export function LoginPage() {

  return (
    <MainWrapper className="main">
      <SubWrapper className="sub-main">
        <div>
          <Imgs className="imgs">
            <ImgsContainer className="container-image">
              <Profile src={profile} alt="profile" className="profile" />
            </ImgsContainer>
          </Imgs>
          <div>
            <h1>Login Page</h1>
            <div>
              <Email src={email} alt="email" className="email" />
              <InputForm type="text" placeholder="남도학숙 아이디" className="name" />
            </div>
            <div className="second-input" style={{paddingTop: '25px'}}>
              <Email src={pass} alt="pass" className="email" />
              <InputForm type="password" placeholder="남도학숙 비밀번호" className="name" />
            </div>
            <div className="login-button" style={{paddingTop: '25px'}}>
              <Button type='button'>Login</Button>
            </div>
          </div>
        </div>
      </SubWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  text-align: center;
  justify-content: center;
  display: flex; 
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-color: #e1e3eb;
`

const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 85vw;
  box-shadow: 11px 12px 13px 12px rgb(207, 207, 207);
  padding-top: 5vh;
  border-radius: 60px; 
  background-color: white;
`

const Imgs = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 5vh;
`

const ImgsContainer = styled.div`
    background-color: rgb(223, 221, 221); 
border-radius: 150px;
align-items: center;
display: flex;
justify-content: center;
height: 115px;
width: 115px;
`

const Profile = styled.img`
    height: 100px;
width: 100px;
border-radius: 130px;
`
const Email = styled.img`
    height: 25px;
  width: 25px;
  position: absolute;
  padding: 14px 0 0 25px;
`
const InputForm = styled.input`
    width: 60vw;
  height: 7vh;
  border-radius: 60px;
  box-shadow: inset 0px 0px 25px 0px #888;
  border: none;
  outline: none;
  background-color: #fff;
  padding-left: 70px;
  font-size: 20px;
`

const Button = styled.button`
    width: 80vw;
  height: 5vh;
  border-radius: 60px;
  background-color: #b103fc;
  color: white;
  font-size: 25px;
  border: none;
`