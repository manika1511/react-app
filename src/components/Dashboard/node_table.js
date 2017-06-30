import React from 'react';
import CheckBox from './checkbox'
import OS_Dropdown from './os_dropdown'

export default class TableDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedNodes:[],
      submit: false,
      os:"A"
    };
    this.addNode= this.addNode.bind(this)
    this.onclick= this.onclick.bind(this)
    this.modifyOsState= this.modifyOsState.bind(this)
  }

  addNode(node, checked){
    console.log(node)
    console.log(checked)
    console.log(this.state.selectedNodes)
    var arr = this.state.selectedNodes
    if (checked === true && arr.indexOf(node) == -1){
      arr.push(node)
      this.setState({
        selectedNodes: arr
      });
    }
    else if (checked === false){
      if (arr.indexOf(node) > -1){
        arr.splice(arr.indexOf(node),1)
        this.setState({
          selectedNodes: arr
        });
      }
    }
    console.log(this.state.selectedNodes)
  }

  modifyOsState(val){
    console.log(val);
    this.setState({os: val});
  }

  onclick() {
    this.setState({
      submit: !this.state.submit
    });
  }

  render(){
    if (this.state.submit === false){
    return(
      <div>
        <div>
          <h3>Nodes in Rack {this.props.rack}</h3>
          <table>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Age</th>
              <th>OS_Select</th>
            </tr>
            {
              this.props.node_data.map((node_data) => {
                return (
                  <tr>
                    <td><CheckBox node={node_data[0]['name']} change={this.addNode}/></td>
                    <td id={node_data[0]['name']}>{node_data[0]['name']} </td>
                    <td id={node_data[0]['age']}>{node_data[0]['age']} </td>
                    <td><OS_Dropdown change={this.modifyOsState}/></td>
                  </tr>
                )
              })
            }
          </table>
        </div>
        <div className="submit">
          <button type="submit" value="OnBoard" onClick={this.onclick}>OnBoard</button>
        </div>
      </div>
      );
    }
    else {
      return(
        <div>
          <ul>
            {
                this.state.selectedNodes.map((data) => {
                return <li id={data}>{data} </li>
              })
            }
          </ul>
        </div>
      );
    }
  }
}
