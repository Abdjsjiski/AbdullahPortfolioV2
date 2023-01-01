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

const education = () => {
    return (
    <Body>
        <div className="title">
        <h1>I want to be a Software Engineer working at Google </h1>
        <h1>but for now I am a stuck being a Student at Clarckon Secondary School</h1>
        <h1>Hey! Now that you mention it let's talk Education</h1>
        </div>
        <br/>
        <div className="list">
        
        <p style={{textAlign: "justify"}}> 
        Obviously as a student I have been through Elementary (Grade 1-6 at Spring Field Public School) and got my certficate! Then I went through middle school (Grades 7-8 at Dalewood Public School in Hamilton Ontario)! and now I'm at highschool (Grade 9 - 12) and I am in Clarkson Secondary School
            </p>
            <p style={{textAlign: "justify"}}> 
               So lets talk school, I currently am in Grade 10, I HAD a 91 percent average in Grade 9 and made it to the Honor Roll Certifcation.
               As for this year, the semester has yet to end, but for my Midterm mark I got an average of 89% in my fourth class. Which still makes me in the Honor Roll Certifcation.
               History is hard can you blame me! Thats where I lost most my marks 
            </p>
            <p style={{textAlign: "justify"}}>
                As for school extra curricular, I am in one of the thirty students picked from the 120 selective students in the highly comppetitive Manufacturing and Design Specialist High School Program. Which is a program avaliable to only select certain amount of kids.
                The main reason Im in this school though is for there ammazing French Immersion.
                I speak fluent french which I believe will help me in my goal at entering Googgle
                As for any other extra curricular, I am in a micro-technology class that etaches studenst how to make big things from programmable arduino baords like a Computer
                I also was prt of my Student activty Council making active choices in the betterment of the online studnets environemnt at Clarkosn for Grade 9, Unfortuantely you cannot eb a rep for two consective years therefore I had to drop out for now and join back next year and
                  
            </p>
            <p style={{textAlign: "justify"}}>
               As for all these extra curriculars I believe they will help me get into a good univeristy which will in the end beneift me, and also help me imporve my leadership skills which will then allow me to become the best team player ever!
                  
            </p>

        <div><h3 style={{textAlign: "justify", color: "lightgreen"}}>I know my grammer isnt the best, but I make do (although english is my first language). So theres prolly like 100 mistakes here but you get my idea hopefully </h3></div>
           
            <div className="img">
                 <img src={require('../../../../assets/CLK.png')} alt="School" width="200px" height="300px" />
            </div>
        
        </div>
        
    </Body>
    );
  };
  
  export default education;