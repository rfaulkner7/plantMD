import React from "react"
import "../App.css"
import Results from "../Pages/Results"



export default function Home (props){
    const [symptoms, setSymptoms] = React.useState("")
    const [snippet, setSnippet] = React.useState()

    return(
        <div class = "center">
            <input class = "ncrFormField" placeholder = "Enter Symptoms" onChange = {(e) => handleSymptoms(e)} label = "Symptoms"/>
            <p class = "white">Or:</p>
            <input class = "botMarg" type = "file" onChange = {(file) => handleFileChange(file)} label = "File input" placeholder = "select file for input"/>
            <div class = "imgContainer">
            <img class = "snippet" src = {snippet}/>
            </div>
            <button class = "buttonStuff" onClick = {(e) => sendSymptons(e)}>Get Results From Symptoms</button>
            <button class = "buttonStuff" onClick = {(e) => sendFile(e)}>Get Results From Image</button>
            <br/>
        </div>
    );


    function handleFileChange(file){
        setSnippet(URL.createObjectURL(file.target.files[0]))
        let reader = new FileReader();
        reader.readAsDataURL(file.target.files[0])

        reader.onload = function() {
            props.setFile(reader.result)
        }
    }

    function handleSymptoms(e){
        setSymptoms(e.target.value)
    }

    function sendSymptons(e){
        console.log(symptoms)
    }

    function sendFile(e){
        console.log(props.imgFile)
        // imageToBase64(file).then(
        //     (response) => {
        //         console.log("response:", response);
        //     }
        // )
        // .catch(
        //     (error) => {
        //         console.log("error:", error )
        //     }
        // )
    }
}