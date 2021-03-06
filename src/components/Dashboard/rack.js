import React from 'react';
import {restClient} from './restClient';
export default class RackInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      rack: ""
    }
  }

  modifystate(val){
    this.setState({rack: val})
    this.props.selRack(val)
  }

  render() {
        return (
          <div>
          <App dc={this.props.dc} change= {this.modifystate.bind(this)} />
          </div>
      );
    }
  }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: []
    }
  }

  handleChange(e) {
    console.log(e.target.id);
    this.props.change(e.target.id);
  }

  loadRack(val){
    restClient.getRacks(val)
    .then(response => {
    console.log(response.data.racks)
    this.setState({data: response.data.racks})
    });
  }

  componentWillMount() {
    console.log("will mount")
    console.log(this.props.dc)
    this.loadRack(this.props.dc);
  }

  componentWillReceiveProps(nextProps){
    console.log("will receive")
    if (nextProps.dc != this.props.dc){
      this.loadRack(nextProps.dc)
    }
  }

  render(){
    console.log("render")
    console.log(this.state.data)
      return(
        <div>
        <h3>Racks in the Data center {this.props.dc}</h3>
        <ul onClick={this.handleChange.bind(this)}>
        {
        this.state.data.map(function(data) {
          return <li id={data}>{data} </li>
        })
      }
    </ul>
        </div>
      );
    }
  }
