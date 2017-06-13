// src/components/App/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AZ_Dropdown from './az_dropdown';
import RackInfo from './rack';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        selectedValue:"CCG1",
    };
  }

  modifystate(val){
    console.log(val);
    this.setState({selectedValue: val});
  }

  render() {
          return (
          <div>
          <AZ_Dropdown change={this.modifystate.bind(this)} />
          <RackInfo dc={this.state.selectedValue}/>
          </div>
          );
      }
}

export default App;
