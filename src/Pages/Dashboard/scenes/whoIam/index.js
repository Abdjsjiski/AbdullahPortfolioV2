import React from "react";
import Header from "../../Components/Header";
import styled from "styled-components"
// body, list, h1 
const Body = styled.div`
color: lightgreen;
list-style: none;
text-align: center;
padding: 2rem;

& h3{
  color: lightgreen;
}
& .img{
  justify-content: center;
  align-items: center;
  text-align: center;
}
  `
const List = styled.div`
text-align: left;
  `
const WhoIam = () => {
    return (
    <Body>
        <Header title="Everyone has a Past right?" subtitle="Well here is mine, and why I love CS"/>
        <br/>
        <List>
        
            <p style={{textAlign: "justify"}}> When I was 8 years of age my brother had started to programme, I found it so cool to see my brother make programs that would come alive from nothing.
            At that time this was called Back End Programming (and still is). I saw him code in C++ and bring robots and AI to life.
            </p>
            <p style={{textAlign: "justify"}}> 
                Ever since then I saw coding as this amazing activity! I started to learn coding, begining with the markup language HTML then CSS, then Javascript. Soon after I was making projects from scratch aswell
            I always saw the task of coding as a challenge, since you need problom solving skills to solve errors and approrpriate Communication Skills to ask others for help (when needed)  
            </p>
            <p style={{textAlign: "justify"}}>
            I then started taking on bigger projects, where My skills expanded, I learnt React, Ruby, the entred the world of backend like Python and Node.Js and C++. This all lead me to make bigger and better projects.
            </p>
            <p style={{textAlign: "justify"}}>
            Furthermore, I then got into game design and really my knowledged expanded like crazy, but then one day I stopped and thought hard. What do I really want to do. Then I decided I wanted to become a Front End Developer!
            I harnessed all my skills and leant Next.Js, React.Js, and MongoDB / mongoose databses to create new and even more stunning websites. 
            </p>

        <div><h3 style={{textAlign: "justify", color: "lighgreen"}}>So thats my left story, so Whats yours?! Maybe we can Meet</h3>
        </div>
           
           <div className="img">
           <img src={require('../../../../assets/Canada.jpg')} alt="Canada" width="500px" height="300px" />
        </div>
        
        </List>
        
    </Body>
    );
  };
  
  export default WhoIam;