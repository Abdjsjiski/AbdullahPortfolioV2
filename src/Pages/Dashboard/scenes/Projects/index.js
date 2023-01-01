import React from "react";
import styled from "styled-components"
const Body = styled.div`
color:lightgreen;
list-style: none;
text-align: left;
padding: 2rem;

& a {
    list-style: none;
    color: lightgreen;
    font-size: 18px;
    text-align: left;
}

& h3{
    color: lightgreen;
}
  `
  const Title = styled.div`
  text-align: center;
  `
  const List = styled.div`
  line-height: 1.5;   
`
const p = () => {
    return (
    <Body>
        <Title>
        <h1>Remember how I said experience only comes from real life examples</h1>
        <h1>Remember how I said that my skills need to be Proven </h1>
        </Title>
        <br/>
        <List>
        <h2 style={{textAlign: "justify"}}>
            Well Welcome to that PROOOF. In this section I will list some projects I made (this includes this website). Oh Yeah I got many more in Production aswell like a meme advisor, or a url shortner, Its coming so check back in january of 2023!!
        </h2>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="http://dailydevportfolio.ml">My First portfolio made in 2019</a>

        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://replit.com/@AK08BJ732023/SnakeGame-mini-game#index.html">A Basic Snake Game showcasing the manipulation of the Javascript dom to create basic and some advanced game using basic HTML CSS and Vanilla Javascript made in 2016 </a>
        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://replit.com/@AK08BJ732023/Calculator-Advanced#styles.css">A calculator showcasing advanced ES6, user accessibility, and user experience for both extension and websites, which also shows well-versed in tools (migrated back to a website) (2018) </a>
        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://StripedGrubbyScales.ak08bj732023.repl.co">Save a link made in Vanilla Javascript to help remember a message, tool, or tab without accidentally deleting it like on Google Chrome (Its a private extension, but I put it up as a website)(2017) </a>
        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://replit.com/join/czcdpcajvd-ak08bj732023">A Netflix-Clone showcasing User accessibility, customization, authentication and expertise in MERN Projects,  React.JS /  Next.JS, Redux Toolkit, Node.js, Firebase, MongoDB, SQL, and more</a>
        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://www.freecodecamp.org/AbdullahKhanFD">All other projects can be viewed on my FreeCodeCamp (FCC) profile the courses and projects were created on my Laptop over the last 4-5 years, but the certificates were retrieved, through Localhost URLs, in December 2022 for this Project
</a>
        </div>

        {/* style={{textAlign: "justify"}} */}


        <div><h3 style={{textAlign: "justify", color: "lighgreen"}}>Not Enough eh? I got more, I got some Achievements to back this up!</h3>
        </div>
           
           <div>
           <img src={require('../../../../assets/Projects.jpg')} alt="Canada" width="500px" height="300px" />
        </div>
        
        </List>
        
    </Body>
    );
  };
  
  export default p;