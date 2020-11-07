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


export default function App() {
  const [file, setFile] = React.useState("lol")

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
          <Home imgFile = {file} setFile = {setFile}/>
        </Route>
      </Switch>
    </BrowserRouter>
    <Results imgFile = {file} setFile = {setFile}/>
    </div>
  );
}
