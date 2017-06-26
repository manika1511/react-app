import React from 'react';
import TableDisplay from './node_table'
import {restClient} from './restClient';

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
    restClient.getNodes(val)
    .then(response => {
      this.setState({nodes: response.data.nodes})
      this.loadNodeData(this.state.nodes)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  loadNodeData(val){
    restClient.getNodeData(val)
    .then(response => {
      this.setState({node_data: response.data.node_data, nodes_ret: true})
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
