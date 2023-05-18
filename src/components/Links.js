import React from "react";

function Links(props){
    return(
        <div>
            <h3>Links</h3>
            <a href={props.linkgit}>{props.linkgit}</a>
            <a href= {props.linked}>{props.linked}</a>
        </div>
        );
}
export default Links;