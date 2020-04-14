import React, {Component} from 'react';
import './App.css';
import Login from './components/Login.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class App extends Component{


  render(){

    return(
      <div>
        <div>
        <Login />
        </div>
        </div>
    )
  }
}

export default App