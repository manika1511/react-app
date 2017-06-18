import React from 'react';
import '../../stylesheets/index.scss';

export default class TableDisplay extends React.Component{
  render(){
    return(
      <div>
      <h3>Nodes in Rack {this.props.rack}</h3>
      <table>
      <tr>
      <th>Name</th>
      <th>OS</th>
      <th>Age</th>
      </tr>
      {
        this.props.node_data.map(function(node_data) {
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
}
