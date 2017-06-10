import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class RackInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      racks: []
    }
  }

  modifystate(val){
    this.setState({racks: val.racks})
  }

  render() {
      return (
      <div>
      <App dc={this.props.dc} url= 'http://localhost:3001/helloworld' change= {this.modifystate.bind(this)}/>
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

  componentDidMount() {
    axios.get(this.props.url).then(response => {
        this.setState({data: response.data.racks})
      });
  }

  render(){
      return(
        <div>
        <h3>Racks in Data center {this.props.dc}</h3>
          <ul>
            <li>{this.state.data[0]}</li>
            <li>{this.state.data[1]}</li>
            <li>{this.state.data[2]}</li>
          </ul>
          </div>
      );
    }
  }
