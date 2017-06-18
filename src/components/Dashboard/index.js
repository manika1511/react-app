import React from 'react';
import AZ_Dropdown from './az_dropdown';
import RackInfo from './rack';
import RackNodes from './rack_nodes'
import '../../stylesheets/index.scss';

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
      <div>
        <h1>On Boarding </h1>
      </div>
      <AZ_Dropdown change={this.modifyDcState.bind(this)} />
      <RackInfo dc={this.state.selectedValue} selRack={this.modifyRackState.bind(this)}/>
      </div>
      );
    } else if (this.state.selectedValue !== "" && this.state.selectedRack !== ""){
      return (
        <div>
        <div>
          <h1>On Boarding </h1>
        </div>
        <div>
        <RackNodes rack={this.state.selectedRack} />
        </div>
        </div>
      );
    }
  }
}
