import React from 'react';
import CheckBox from './checkbox'

export default class TableDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedNodes:[],
    };
    this.addNode= this.addNode.bind(this)
  }

  addNode(node, checked){
    console.log(this.state.selectedNodes)
    if (checked === true && this.state.selectedNodes.indexOf(node) == -1){
      this.setState({
        selectedNodes: this.state.selectedNodes.push(node)
      });
    }
    else if (checked === false){
      if (this.state.selectedNodes.indexOf(node) > -1){
        this.setState({
          selectedNodes: this.state.selectedNodes.splice(this.state.selectedNodes.indexOf(node),1)
        });
      }
    }
  }

  render(){
    console.log(this.state.selectedNodes)
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
          this.props.node_data.map((node_data) => {
          return (
            <tr>
              <td><CheckBox node={node_data[0]['name']} change={this.addNode}/></td>
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
