import React from 'react';
import '../../stylesheets/index.scss';

export default class AZ_Dropdown extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectValue:"CCG1",
    };
  }

  handleChange(e){
    this.setState({selectValue:e.target.value});
    this.props.change(e.target.value);
  }

  render() {
        var message='You selected '+this.state.selectValue;
        return (
        <div>
          <select value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
            <option value="CCG1">CCG1</option>
            <option value="CCG2">CCG2</option>
            <option value="CCG3">CCG3</option>
          </select>
          <p>{message}</p>
          </div>
        );
    }
}
