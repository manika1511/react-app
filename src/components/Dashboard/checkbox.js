import React from 'react';

export default class CheckBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      checked: false,
    };
    this.modifyState= this.modifyState.bind(this)
  }

  modifyState(){
    this.setState({checked: !this.state.checked});
    {this.props.change(this.props.node,this.state.checked)}
  }

  render(){
    return(
      <input type="checkbox" checked= {this.state.checked} onChange={this.modifyState}/>
    );
  }
}
