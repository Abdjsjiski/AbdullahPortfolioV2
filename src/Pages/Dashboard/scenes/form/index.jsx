import React from 'react'
import {useRef} from "react"
import styled from "styled-components"
import Header from "../../Components/Header"
import "./style.css"
import emailjs from '@emailjs/browser';

const Body = styled.div`
margin: 0;
padding: 0;
font-family: 'poppins', sans-serif;
text-align: center;
justify-content: center;
align-items: center


& .hero{
width: 100%;
height: 50vh;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
background-image: url('../../../../assets/waterfall.jpg');
height: 200%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

& form{
width: 90%;
max-width: 600px;
text-align: center;
}

& .input-group{
position: relative;
margin-top: 45px;
}

& input{
width: 100%;
padding: 10px ;
outline: 0;
border: 1px solid #fff;
color: #fff;
background: transparent;
font-size: 15px;
text-align: left;
}

& textarea{
width: 100%;
margin: -10px 0px 0px;
outline: 0;
border: 1px solid #fff;
color: white;
background: transparent;
font-size: 15px;
text-align: left;
}
& .message{
color: white;
}
& label{
height: 100%;
position: absolute;
left: 0;
bottom: 8;
justify-content: space-between;
pointer-events: none;
letter-spacing: 0.05em;
transition: 0.5s;
background: transparent;
z-index: 10;
align-items: center;
margin: 0 0 -10px 10px;
color: #fff;
cursor: text;
transition: 0.2s;
}


& .submit{
width: 100%;
padding: 10px ;
outline: 0;
border: 1px solid #fff;
color: #fff;
background: transparent;
font-size: 15px;
text-align: center;
pointer-events: auto;
cursor: pointer;
margin-top: 10px;
border-radius: 4px;
font-weight: 600;
cursor: pointer;
}

& input:focus~label,
& input:valid~label,
& textarea:focus~label,
& textarea:valid~label{
transform: translateY(-34px);
font-size: 1em;
z-index: 10;
}

& .submit:disabled{ 
content: "Button Disabled to Prevent Spam!"
}


& .row{
display: flex;
align-items: center;
justify-content: space-between;

}

& .row .input-group{
flex-basis: 48%;
}

& a {
  color: white;

  &:hover{
    color: red;
  }
}

`
function ContactUs() {
  const form = useRef()
  const btnRef = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    if(btnRef.current){
      btnRef.current.setAttribute("disabled", "disabled");
    }

    emailjs.sendForm('AbdullahKhanPPM', 'AbdullahKhanTPPM', form.current, 'ivTizmIHz2iW9xvrg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <Body>
    <Header title="Hey let's meet up! Coffee on Me" subtitle="I'll get back to you on the email your provided" className="header"/>
    <div className="hero">
        <form onSubmit={sendEmail} ref={form}>
            <div class="row">
            <div class="input-group">
                <input type="text" class="name" name="name" required/>
                <label for="name">Your Full Name</label>
           </div>

           <div className="input-group">
                <input type="text" className="number" name="phone" required/>
                <label for="number">Your Phone Number (if none type N/A)</label>
           </div>
            </div>
           <div className="input-group">
           <input type="text" className="subject" name="email" required/>
            <label for="subject">Email</label>
           </div>

           <div className="input-group">
                <input type="text" className="subject" name="Subject" required/>
                <label for="subject">The Subject</label>
           </div>
           <div className="input-group">
                <textarea type="message" rows="8" cols="8" wrap="physical" name="message" required></textarea>
                <label for="name" className="message">Your Message</label>
           </div>
           <button type="submit" className="submit" ref={btnRef}>SEND</button>
        </form>
    </div>
            <a href="mailto:abdullahaviator13@gmail.com" target="_blank" rel="noreferrer" >Or Need to Contact me directly / Urgently </a>

    </Body>
  );
};

export default ContactUs;