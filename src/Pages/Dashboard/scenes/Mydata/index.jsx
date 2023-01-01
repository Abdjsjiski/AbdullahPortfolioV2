import React from "react";
import styled from "styled-components"
import {keyframes} from "styled-components"

const Body = styled.div`
color: lightgreen;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
justify-content: center;
align-items: center;
min-height: 100vh;
background: nome;

& h1{
  color: lightgreen;
  text-align: center;
}

& h2{
  color: lightgreen;
}


& h3{
  color: lightgreen;
}
  `
const A = styled.a`
text-decoration: none;
  border: 3px solid yellow;
  color: transparent;
  padding: 40px 80px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 0.5s;
  position: relative;
  
  &:before{
    content: "Log Out";
  display: flex;
  justify-content: center;
  align-items: center;
  color: yellow;
  background: rgb(34, 34, 34);
  font-size: 28px;
  top: 0;
  left: 100%;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 1s;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: scale(0) rotatey(0);
  opacity: 0;
  }

  &:hover:before {
    transform: scale(1) rotatey(360deg);
    left: 0;
    opacity: 1;
  }

  &:after{
    content: "Log Out";
  display: flex;
  justify-content: center;
  align-items: center;
  color: yellow;
  background: rgb(34, 34, 34);
  font-size: 28px;
  top: 0;
  left: 0;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 1s;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: scale(1) rotatey(0);
  opacity: 1;
  }

  &:hover:after{
    transform: scale(0) rotatey(360deg);
  left: -100%;
  opacity: 0;
  }
  `
  const animate = keyframes`
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: -480px;
  }
  `
const B = styled.button`
text-align: center;
  align-items: center;
  justify-content: center;
position: relative;
width: 180px;
height: 115px;
margin: 0px 10px 20px 20px;
cursor: pointer;
line-height: 60px;
letter-spacing: 2px;
text-decoration: none;
text-transform: uppercase;
color: red;
trasnition: 0.5s;
border: 1px solid #ec1840;
&:hover {
  border: 1px solid transparent;
  background: #ec1840 url(https://i.postimg.cc/wBXGXbWN/pixel.png); // 360px x 1080px
  transition-delay: 0.8s;
  background-size: 180px;
  animation: ${animate} 0.8s steps(8) forwards;
  color: white;
}
&:last-of-type {
  border: 1px solid #7a18ec;
  &:hover {
    background: #7a18ec url(https://i.postimg.cc/FzBWFtKM/pixel2.png); // 360px x 1080px
  }
}

`
const Main = styled.div`
margin-right: -25px;
text-align: center;
  align-items: center;
  justify-content: center;
`
function Uioptions(){
  const name = localStorage.getItem("name",)
  const Email = localStorage.getItem("email")
  const Password = localStorage.getItem("password")
    const logout=()=>{
        localStorage.removeItem("signUp")        
        window.location.reload()
    }
    const deleteAccount=()=>{ 
      
      localStorage.clear()
      window.location.reload()
    }
    return(
        <Body>
            <h1>Welcome {name} to your profile data</h1>
            <h2> The name you signed up with!</h2>
               <h3>Name: {name}</h3>
               <h2> The Email you signed up with!</h2>
                <h3>Email: {Email}</h3>
                <h2>The Password you signed up with!</h2>
                <h3>Password: {Password}</h3>
            <h2>Your Data is put in a safe location but it is still important that you know your data </h2>
          <h2>Once you logged in, you agree to all terms and conditions.
          So now Please chose one of the options below I will list your Full name, Email, and Password below that you used to sign up.</h2>
          <h2>Due to privacy concerns you cant change your email or password or name, please delete this account then re create it if you would like to change any of these</h2>
          <h2> I recomend after visting this site to delete your account unless you are coming back to visit </h2>
          <h2>As mentioned in terms of use! I am not responsible for any damge to any of your personal data, if anyone finds out about your passwords or email. Since the email isnt verified i recomend you have your email as a fake email and a fake password.</h2>
          <h3>Sincerely, </h3>
          <h3>Abdullah Khan </h3>
          <br/>
        <Main>
        <A  rel="noreferrer nofollow" onClick={logout}></A>
          <B  rel="noreferrer nofollow" onClick={deleteAccount}>Delete Account</B>
        </Main>
       
</Body>
    );
}
export default Uioptions;