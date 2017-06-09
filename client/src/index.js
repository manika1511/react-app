import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class AZ_Dropdown extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectValue:"CCG1",
    };
  }

  handleChange(e){
    this.setState({selectValue:e.target.value});
    this.props.change(e.target.value);
  }

  render() {
        var message='You selected '+this.state.selectValue;
        return (
        <div>
          <select value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
            <option value="CCG1">CCG1</option>
            <option value="CCG2">CCG2</option>
            <option value="CCG3">CCG3</option>
          </select>
          <p>{message}</p>
          </div>
        );
    }
}

class Dash_board extends React.Component{
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
          <App dc={this.state.selectedValue}/>
          </div>
          );
      }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      racks: []
    }
  }

  componentDidMount() {
    console.log(this.state.racks)
    axios.get('http://localhost:3001/helloworld').then(response => {
        this.setState({racks: response.data.racks})
      });
  }

  render(){
    console.log(this.state.racks)
      return(
        <div>
        <h3>Racks in Data center {this.props.dc}</h3>
        <ul>
          <li>{this.state.racks[0]}</li>
          <li>{this.state.racks[1]}</li>
          <li>{this.state.racks[2]}</li>
        </ul>
        </div>
      );
    }
  }

ReactDOM.render(<Dash_board />, document.getElementById("root"));
