import React from 'react';

export default class CheckBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      checked: false,
    };
  }

  modifyState(){
    this.setState.checked({checked: !this.state.checked});

    // {this.props.add(this.props.node,this.state.checked)}

    // console.log(this.state.selectedNodes)
  }

  render(){
    console.log(this.props.node)
    return(
      <input type="checkbox" checked= {this.state.checked} onChange={this.modifyState.bind(this)}/>
    );
  }
}
