import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Map from "./components/map";

 class App extends Component {
  
  
  render(){
    
    return(
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Map}/>
          </div>
        </Router>
      </div>
    );
      
  }
}


export default (App);
