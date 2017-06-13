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

  fetchrack() {
      axios.post('/rack', {
      dc: this.props.dc,
    })
    .then(response => {
      console.log(response.data.racks)
           this.setState({data: response.data.racks})
         })
    .catch(function (error) {
      console.log(error);
    });
  }

  // componentDidMount() {
  //   axios.get(this.props.url).then(response => {
  //       this.setState({data: response.data.racks})
  //     });
  // }

  // componentDidMount() {
  //   var prev = this.props.dc
  //   axios.post('http://localhost:3001/rack', {
  //   dc: this.props.dc,
  // })
  // .then(response => {
  //   console.log(response.data.racks)
  //        this.setState({data: response.data.racks})
  //      })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // }


  render(){
    {this.fetchrack()}
      return(
        <div>
        <h3>Racks in Data center {this.props.dc}</h3>
        <ul>
        {
        this.state.data.map(function(data) {
          return <li key={data}>{data}</li>
        })
      }
    </ul>
        </div>
      );
    }
  }
