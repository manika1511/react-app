import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class RackNodes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nodes: [],
      node_data: []
    }
  }

  loadNodes(val){
      axios.post('/node', {
        nodes: val,
      })
      .then(response => {
        console.log(response.data.nodes)
        this.setState({nodes: response.data.nodes})
        // console.log(this.state.nodes[0])
        this.loadNodeData(this.state.nodes)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadNodeData(val){
    axios.post('/node_data', {
      node: val,
    })
    .then(response => {
      console.log(response.data.node_data)
      this.setState({node_data: response.data.node_data})
      console.log(this.state.node_data[0])
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    this.loadNodes(this.props.rack);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.dc != this.props.dc){
      this.loadNodes(nextProps.dc);
    }
  }

  render(){
    if (this.state.nodes!=[] && this.state.node_data!= []){
      return(
        <div>
        <h3>Nodes in Rack {this.props.rack}</h3>
        <table style="width:100%">
        <tr>
          <th>name</th>
          <th>OS</th>
          <th>Age</th>
        </tr>
          {
            this.state.node_data.map(function(node_data) {
              return (
                <tr>
                  <td id={node_data[0]['name']}>{node_data[0]['name']} </td>
                  <td id={node_data[0]['OS']}>{node_data[0]['OS']} </td>
                  <td id={node_data[0]['age']}>{node_data[0]['age']} </td>
                </tr>
              )
            })
          }
        </table>
        </div>
      );
    }
    else {
      return(
        <div>
        </div>
      );
    }

    }
}
