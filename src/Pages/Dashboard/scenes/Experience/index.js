import React from "react";
import styled from "styled-components"

const Body = styled.div`
color: lightgreen;
list-style: none;
text-align: left;
padding: 2rem;

& h3{
    color: lightgreen;
}

& h1{
    line-height: 0.5;
}

& .list{
    text-align: left;
}

& .title{
    text-align: center;
}

& .img{
    align-items: center;
    justify-content: center;
    text-align: center;
}
`
const exp = () => {
    return (
    <Body>
        <div className="title">
        <h1>Hello my name is Abdullah Khan and...</h1>
        <h1>I am an aspiring to be Full Stack Developer </h1>
        <h1>I hope I can join your team!!!</h1>
        <h1>Oh You Want Expereience</h1>
        <h1> Welcome to the Expereience page</h1>
        </div>
        <br/>
        <div className="list">
        
            <h2 style={{textAlign: "justify"}}> 
            Experience can only be shown by Projects and assignements, therefore thats why after this I have the My Projects section so make sure to check that out to make sure im not blabbering 
            </h2>
            <h3 style={{textAlign: "justify"}}> 
                In this area I will just list my Experiences from most Proficient to stuff I am learning
            </h3>
            <p style={{textAlign: "justify"}}>
            Proven mastery in HTML5, CSS3, SASS, JS, ES6, React.JS, Node.JS, and General Web development; familiarity with a variety of software-related tools, including editors, compilers, and IDEs like Vscode and even online browser IDE's. Git, Gash, bash you name it I prolly know it hehehe
            </p>
            <p style={{textAlign: "justify"}}>
            Knowledgeable in Programming languages (including Next.js, SQL, MongoDB, Firebase, Python, Vue.JS, Apache, PHP, User Experience and Customization, Linux), Robotics, and Game Design software (including Unity, Unreal Engine, and Physics)
            </p>
            <p style={{textAlign: "justify"}}>
            Excellent visual-spatial and art skills to create aesthetically pleasing and user-accessible designs
            </p>
            <p style={{textAlign: "justify"}}>
            Detail-oriented, quick learner, and critical thinker who asks questions and conducts research
            </p>
            <p style={{textAlign: "left"}}>
            Effective communicator and team player with the ability to collaborate and perform tasks successfully.
            </p>
            <p style={{textAlign: "left"}}>
            Innovative, always bringing creative ideas to solve problems strategically 
            </p>
            <p style={{textAlign: "left"}}>
            Languages: Fluent in French and conversational in Urdu 
            </p>


        <div><h3 style={{textAlign: "justify", color: "lightgreen"}}>Hey dont stop now theres more</h3>
        </div>
           
           <div classNameName="img">
           <img src={require('../../../../assets/exp.jpg')} alt="Canada" width="700px" height="300px" />
        </div>
        
        </div>
        
    </Body>
    );
  };
  
  export default exp;