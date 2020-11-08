import React, { useState, useEffect } from "react"
import "../App.css"
import Results from "../Pages/Results"
import MultiSelect from "react-multi-select-component";
import { Button } from 'reactstrap';
const request = require('request')



export default function Home (props){
    const [snippet, setSnippet] = React.useState()
    const [options, setOptions] = React.useState([])
    const [currFruit, setCurrFruit] = React.useState("")
    const [currSymptoms, setCurrSymptoms] = React.useState([])
    const [fruitOptions, setFruitOptions] = React.useState([])

    useEffect(() => {
        const options = {
            url: 'https://be6c85af4cb9.ngrok.io/fruit',
            headers : {
                "content-type": "application/json",
            },
            json: true
          }
        request.get(options, function(error, response, body) {
            if(error){
                console.error(error)
            } else {
                let holder = []
                let counter = 0
                body.fruits.forEach(fruit => {
                    holder.push({label: fruit.name, value: counter})
                    counter = counter + 1
                })
                setFruitOptions(holder)
            }
        })
    }, []
    )

    const [symptomSelected, setSymptomSelected] = useState([])
    const [fruitSelected, setFruitSelected] = useState([])


    return(
        <div class = "center">
            <div class = "row">
                <p class = "space blue">Select Plant Type:</p>
                <br/>
            <MultiSelect className = "wider"
                options={fruitOptions}
                value={fruitSelected}
                onChange={(e) => fruitChange(e)}
                labelledBy={"Select Fruit"}
            />
            <br/>
            <p class = "space blue">Select Symptoms:</p>
            <br/>
                <MultiSelect
                className = "wider"
                options={options}
                value={symptomSelected}
                onChange={(e) => symptomChange(e)}
                labelledBy={"Select Symptoms"}
            />
            </div>
            <br/>
            <br/>
            {/* <input class = "ncrFormField" placeholder = "Enter Symptoms" onChange = {(e) => handleSymptoms(e)} label = "Symptoms"/> */}
            <p class = "white">Or:</p>
            <div class = "centerStuff">
            <input class = "botMarg" type = "file" onChange = {(file) => handleFileChange(file)} label = "File input" placeholder = "select file for input"/>
            </div>
            <div class = "imgContainer">
            <img class = "snippet" src = {snippet}/>
            </div>
            <Button variant = "Success" className = "buttonStuff" onClick = {(e) => sendSymptons(e)}>Get Results From Symptoms</Button>
            <Button variant = "Success" className = "buttonStuff" onClick = {(e) => sendFile(e)}>Get Results From Image</Button>
            {/* <Button variant = "Success" className = "buttonStuff" onClick = {(e) => requestFruit()}>Tester</Button> */}
        </div>
    );

    function fruitChange(e){
        if(e.length > 0){
            let finUrl = 'https://be6c85af4cb9.ngrok.io/symptom/' + e[0].label
            setCurrFruit(e[0].label)
            console.log(finUrl)
            const options = {
                url: finUrl
              }
            request.get(options, function(error, response, body) {
                if(error){
                    console.error(error)
                } else {
                    let temp = []
                    JSON.parse(body).symptoms.forEach(symptom => {
                        temp.push({label : symptom.name + " - " + symptom.affected_part, value: symptom.id})
                    })
                    console.log(temp)
                    setOptions(temp)
                }
            })
            // setOptions([
            //     {label: "worms", value: 1},
            //     {label: "scabs", value: 2},
            //     {label: "rot", value: 3}
            // ])
        }else {
            setOptions([])
        }
        setFruitSelected(e)
    }

    function symptomChange(e){
        let copyarr = []
        e.forEach(element => {
            copyarr.push(element.value)
        })
        console.log(copyarr)
        setCurrSymptoms(copyarr)
        setSymptomSelected(e)
        // console.log(currSymptoms)
    }

    function handleFileChange(file){
        setSnippet(URL.createObjectURL(file.target.files[0]))
        let reader = new FileReader();
        reader.readAsDataURL(file.target.files[0])

        reader.onload = function() {
            props.setFile(reader.result)
        }
    }

    // function requestFruit(){
    //     const options = {
    //         url: 'https://be6c85af4cb9.ngrok.io/symptom/guess',
    //         body: {
    //           "fruit": "Apple",
    //           "symptoms": []
    //         },
    //         headers : {
    //             "content-type": "application/json",
    //         },
    //         json: true
    //       }
    //     request.post(options, function(error, response, body) {
    //         if(error){
    //             console.error(error)
    //         } else {
    //             console.log(body)
    //         }
    //     })
    // }

    // function handleSymptoms(e){
    //     props.setSymptoms(e.target.value)
    // }

    function sendSymptons(e){
        console.log(currSymptoms)
        const options = {
            url: 'https://be6c85af4cb9.ngrok.io/symptom/guess',
            body: {
              "fruit": currFruit,
              "symptoms": currSymptoms
            },
            headers : {
                "content-type": "application/json",
            },
            json: true
        }
        request.post(options, function(error, response, body) {
            if(error){
                console.error(error)
            } else {
                // console.log(body.diseases)
                console.log(body.diseases)
                props.setPossibleDiseases(body.diseases)
            }
        })
        // console.log(options)
    }

    function sendFile(e){
        // console.log(props.imgFile)
        // console.log(props.imgFile.split("base64,")[1])
        const options = {
            url: 'https://be6c85af4cb9.ngrok.io/disease/image',
            body: {
              "b64_img": props.imgFile.split("base64,")[1],
            },
            headers : {
                "content-type": "application/json",
            },
            json: true
            // headers: {
            //   'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            // }
          }
        // console.log(options)
        request.post(options, function(error, response, body) {
            if(error){
                console.error(error)
            } else {
                // let holder = [body.prediction[1].id]
                if(body != null){
                console.log([body.prediction[1]])
                props.setPossibleDiseases([body.prediction[1]])
                }
                else{
                    props.setPossibleDiseases([])
                }
                // props.setPossibleDiseases(body)
                // props.setPossibleDiseases(holder)
            }
        })
    }
}