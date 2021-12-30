import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import ClientChart from "./ClientChart";
import OptionFlow from "./OptionFlow";

class App extends Component {
  render() {
	
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/clients' exact={true} component={ClientList}/>
            <Route path='/clients/:id' component={ClientEdit}/>
            <Route path='/data' exact={true} component={ClientChart}/>
            <Route path='/optionflow' exact={true} component={OptionFlow}/>
          </Switch>
        </Router>
    )
  }
}

export default App;