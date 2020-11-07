import logo from './logo.svg';
import './App.css';
import Results from './Pages/Results'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
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
        <Route path = "/results">
          <Results/>
        </Route>
        <Route path = "/">
          <h1>Hiya</h1>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}
