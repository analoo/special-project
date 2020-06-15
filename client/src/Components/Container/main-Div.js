import React from "react";
import "./container.css"



function MainDiv(props){
   
    return(
        <div className="main-div col-md-12 col-sm-12 d-flex justify-content-center ">
            {props.children}
        </div>
    )
}

export default MainDiv;