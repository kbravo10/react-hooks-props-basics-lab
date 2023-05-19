import React from "react";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {display(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this"/>
      <Links linkedin={props.links.linkedin} github={props.links.github} />
    </div>
  );
}

function display(prop){
  if (prop.bio === ""){
    return <></>;  
  }
  else if(prop.bio === undefined){
    return <></>
  }
  else {
   
    return <p>{prop.bio}</p>
}

}
export default About;
