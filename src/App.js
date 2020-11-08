import logo from './logo.svg';
import './App.css';
import Results from './Pages/Results'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import 'semantic-ui-css/semantic.min.css'
import React from "react"
// import MultiSelect from 'multiselect-react-dropdown'


export default function App() {
  const [file, setFile] = React.useState("lol")
  const [symptoms, setSymptoms] = React.useState()
  const [possibleDiseases, setPossibleDiseases] = React.useState([])
  const [disease, setDisease] = React.useState()

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path = "Results">
    //       <Results/>
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <div class = "bg">
    <BrowserRouter>
      <Switch>
        <Route path = "/">
          <Home
          possibleDiseases = {possibleDiseases} setPossibleDiseases = {setPossibleDiseases}
          imgFile = {file} setFile = {setFile} symptoms = {symptoms} setSymptoms = {setSymptoms} setDisease = {setDisease}/>
        </Route>
      </Switch>
    </BrowserRouter>
    <Results possibleDiseases = {possibleDiseases} symptoms = {symptoms} imgFile = {file} setFile = {setFile} disease = {disease}/>
    </div>
  );
}
