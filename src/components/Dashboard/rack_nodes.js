import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TableDisplay from './node_table'
import '../../index.css';

export default class RackNodes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nodes: [],
      node_data: [],
      nodes_ret: false
    }
  }

  loadNodes(val){
      axios.post('/node', {
        rack: val,
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
      this.setState({node_data: response.data.node_data, nodes_ret: true})
      console.log(this.state.node_data[0])
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    console.log("rack_nodes will mount")
    this.loadNodes(this.props.rack);
  }

  componentWillReceiveProps(nextProps){
    console.log("rack_nodes will receive")
    if (nextProps.dc != this.props.dc){
      this.loadNodes(nextProps.dc);
    }
  }

  render(){
    console.log(this.state.node_data)
    console.log("rack " + this.props.rack)
    console.log("node_ret: "+ this.state.nodes_ret)
    if (this.state.nodes_ret === false){
      return(
        <div>
          <h3>Nodes in Rack {this.props.rack}</h3>
        </div>
      );
    }else {
      return(
        <TableDisplay rack={this.props.rack} node_data={this.state.node_data} />
      );
    }
  }
}
