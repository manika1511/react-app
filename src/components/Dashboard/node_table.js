import React from 'react';
import CheckBox from './checkbox'

export default class TableDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedNodes:[],
    };
  }

  addNode(node, checked){
    if (checked === true && this.state.selectedNodes.indexOf(node) == -1){
      this.setState.selectedNodes({
        selectedNodes: this.state.selectedNodes.push(node)
      });
    }
    else if (checked === false){
      if (this.state.selectedNodes.indexOf(node) > -1){
        this.setState.selectedNodes({
          selectedNodes: this.state.selectedNodes.splice(this.state.selectedNodes.indexOf(node),1)
        });
      }
    }
    console.log(this.state.selectedNodes)
  }

  render(){
    console.log(this.state.selectedNodes)
    this.addNode()
    if (this.props.node_data){
    return(
      <div>
      <h3>Nodes in Rack {this.props.rack}</h3>
      <table>
      <tr>
      <th>Select</th>
      <th>Name</th>
      <th>OS</th>
      <th>Age</th>
      </tr>
      {
          this.props.node_data.map(function(node_data) {
          return (
            <tr>
              <td><CheckBox node={node_data[0]['name']} /></td>
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
}
}
