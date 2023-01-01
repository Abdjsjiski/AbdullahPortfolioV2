import React, {useRef} from "react";
import Home from "../Dashboard/Home";
import App from '../../App';
import ReactDOM from 'react-dom/client';
import Up from "./Register"
import styled from "styled-components"
import { keyframes } from 'styled-components'
const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: black;
`;

const animate = keyframes`
0%{
  transform: rotate(0deg)
}
100%{
  transform: rotate(360deg)
}

`

const Box = styled.div`
  position: relative;
  width: 600px;
  height: 540px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 600px;
    height: 440px;
    transform-origin: bottom right;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff
    );
    animation: ${animate} 6s linear infinite;

    &:after{
      content: "";
      position: absolute;
      top: -50px;
      left: -50px;
      width: 600px;
      height: 440px;
      background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
        transform-origin: bottom right;
      animation: animate 6s linear infinite;
      animation-delay: -3s;
    }

  }
`;

const Title = styled.h2`
  align-items: center;
  text-align: center;
  color: #45f3ff;
  font-size: 25px;
  font-weight: 500;
`;

const Form = styled.div`
position: absolute;
inset: 2px;
border-radius: 8px;
background: #28292d;
z-index: 10;
padding: 50px 40px;
display: flex;
flex-direction: column;
`
const InputBoxSpanned = styled.span`
   display: flex;
   justify-content: space-between;
   margin-right: 55px;
   margin-top: -32px;
   font-size: 18px;
   font-weight: 500;
   color: white;
   left: 0;
   padding: 20px 10px 10px;
   pointer-events: none;
   letter-spacing: 0.05em;
   transition: 0.5s
   `;

   const InputBox = styled.div`
   position: relative;
   width: 300px;
   margin-top: 35px;
   `

   const InputBoxInput = styled.input`
   position: relative;
    width: 165%;
    padding: 20px 10px 10px;
    border:none;
    outline: none;
    background: transparent;
    text-align: left;
    font-weight: 500;
    color: black;
    font-size: 1em;
    letter-spacing: 0.05em;
    font-size: 20px;
    z-index: 11;

    &:valid ~ i,
    &:focus ~ i
    {
      height: 55px;
      width: 166%;
      top: 0px;
    }

&:valid ~ span,
&:focus ~ span
{
  color: #45f3ff;
  transform: translateY(-65px);
  font-size: 1.25em;
}
   `

   const ButtonOne = styled.button`
   margin-top: 20px;
   pointer-events: auto;
   cursor: pointer;
   border: none;
   outline: none;
   background: #45f3ff;
   padding: 11px 25px;
   width: 100px;
   margin-top: 10px;
   border-radius: 4px;
   font-weight: 600;
   cursor: pointer;

   &:active{
    opacity: 1;
   }
   `
  const Links = styled.div`
  margin-top: 20px;
  `

  const ButtonTwo = styled.button`
  display: flex;
align-items: left;
margin-top: -10px;
font-size: 1.25em;
border: none;
    outline: none;
    background: none;
    padding: 0;
    color: #8f8f8f;
    cursor: pointer;

    &:hover{
      color: #45f3ff;
    }
  `
  const ButtonThree = styled.button`
  display: flex;
    flex-direction: column;
    margin-left: 25rem;
    margin-top: -20px;
    font-size: 1.25em;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    color: #8f8f8f;

    &:hover{
      color: #45f3ff;

    }
  `

  const II = styled.i`
  position: absolute;
    left: 0;
    bottom: 2px;
    width: 170%;
    height: 2px;
    background: #45f3ff;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  `

function Login(){
   const email=useRef()
   const password=useRef()
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
    let root = null
    root = ReactDOM.createRoot(document.getElementById('root'));
   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        root.render(
            <React.StrictMode>
            <Home />
          </React.StrictMode>
          );
    }else{
    alert("Please Enter Valid Credential")
    }
   }

   const goBack=()=>{
        root.render(
            <React.StrictMode>
            <App />
          </React.StrictMode>
          );
        }

        const handleSignUp=()=>{
            root.render(
                <React.StrictMode>
                <Up />
              </React.StrictMode>
              );
            }
   
    return(
            <Body>
              <Box>
               <Form>
                   <Title> Hello {localName}! Welcome back, let's get You Signed In!</Title>
                 <InputBox>
                  <InputBoxInput type="text"required="required" ref={email}/>
                  <InputBoxSpanned>Your Email: </InputBoxSpanned>
                  <II></II>
                 </InputBox>
    
                 <InputBox>
                  <InputBoxInput type="password" required="required" ref={password}/>
                  <InputBoxSpanned> Your Password: </InputBoxSpanned>
                  <II></II>
                 </InputBox>

                <Links>
                <ButtonTwo className="btn-2 btn" onClick={handleSignUp}> Sign up</ButtonTwo>
                <ButtonThree className="btn-3 btn" onClick={goBack}>Return Home</ButtonThree>
                </Links>
                 
                 <ButtonOne onClick={handleSignIn}>Log In </ButtonOne>
                   </Form>
              </Box>
                  
            </Body>
            )}
export default Login;