import React from "react"
import "../App.css"

export default function Results (props){
    return(
        <div>
            <h1>{props.imgFile.slice(0,30)}</h1>
        </div>
    );
}