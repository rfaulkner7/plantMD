import React from "react"
import "../App.css"
import Dropdown from "../Components/Dropdown"

export default function Results (props){
    return(
        <div class = "bg">
            <div class = "center">
            <h1>
                Possible Diseases:
            </h1>
            </div>
            <DiseaseList/>
        </div>
    );

    function DiseaseList(){
        const listData = props.possibleDiseases.map((disease) => 
            <div>
                <Dropdown name = {disease.name} scientificName = {disease.scientific_name}
                naturalSolution = {disease.natural_solution} chemicalSolution = {disease.chemical_solution}
                externalLink = {disease.external_link}/>
            </div>
        
        )
        return(<div>{listData}</div>)
    }
}