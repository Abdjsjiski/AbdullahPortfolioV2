import React from "react";
import styled from "styled-components"

const Body = styled.div`
color: lightgreen;
list-style: none;
text-align: center;
padding: 2rem;

& .list{

text-align: center;
}

& h1{
line-height: 0.5;
}

& a {
        list-style: none;
        color: lightgreen;
        font-size: 18px;
        text-align: left;     
}
`
const AA = () => {
    return (
    <Body>
        <div className="title">
        <h1>Hmm need more prove that I'm Capable enough</h1>
        <h1>Well you have come to the right spot my freind</h1>
        </div>
        <br/>
        <div className="list">
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://www.freecodecamp.org/AbdullahKhanFD">FreeCodeCamp Certificates: Responsive Web Design, Javascript Algorithms and Data Structures, Front End Development Libraries, and Relation Database</a>
        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/document/d/1N5gJXGsakQMcSxUGcFRQ73_WrivZJ6V62KKDesaq_NI/edit">Awarded eight certificates in the University of Waterloo CEMC Math Contest
</a>
        </div>
        <div>
        <a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/document/d/1zQntCrVjP_Yf4zvG9q-LJGSRjnSiMYTh6vnExas8pwM/edit">Awarded two completion certificates from Thinnox Academy for Robotics and Wiring
</a>
<a style={{textAlign: "justify"}} target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/document/d/1STRMMqEpaYveTc4bGdgLdazrcQaHk_ljRyv8Fog4qi0/edit">Awarded Enterprise Design Thinking by IBM –Certificate

</a>
        </div>
    
<p  style={{textAlign: "justify"}}>(Note: I am working with FCC support since the Relation Database Certificate won't show)
</p>
        </div>

 
        
        

        <div><h3 style={{textAlign: "justify", color: "lightgreen"}}>This is like the grand finally but You have a few things left from me!! :) </h3>
        </div>
           
           <div>
           <img src={require('../../../../assets/aa.jpg')} alt="Canada" width="500px" height="300px" />
        </div>
        
        </Body>
        
    );
  };
  
  export default AA;