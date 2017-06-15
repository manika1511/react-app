// src/components/App/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AZ_Dropdown from './az_dropdown';
import RackInfo from './rack';
import RackNodes from './rack_nodes'

export default class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
        selectedValue:"CCG1",
        selectedRack: ""
    };
  }

  modifyDcState(val){
    console.log(val);
    this.setState({selectedValue: val});
  }

  modifyRackState(rack){
    this.setState({selectedRack: rack})
  }

  render() {
    if (this.state.selectedValue !== "" && this.state.selectedRack === ""){
      return (
      <div>
      <AZ_Dropdown change={this.modifyDcState.bind(this)} />
      <RackInfo dc={this.state.selectedValue} selRack={this.modifyRackState.bind(this)}/>
      </div>
      );
    } else {
      return (
        <RackNodes rack={this.state.selectedRack} />
      );
    }
  }
}
