import React from "react"
import "../App.css"



export default function Home (props){
    const [symptoms, setSymptoms] = React.useState("")

    return(
        <div class = "center">
            <input class = "ncrFormField" placeholder = "Enter Symptoms" onChange = {(e) => handleSymptoms(e)} label = "Symptoms"/>
            <button class = "buttonStuff" onClick = {(e) => sendSymptons(e)}>Send Symptoms</button>
        </div>
    );

    function handleSymptoms(e){
        setSymptoms(e.target.value)
    }

    function sendSymptons(e){
        console.log(symptoms)
    }
}