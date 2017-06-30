import React from 'react';
// import '../../stylesheets/index.css';

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
          <div className="left-div"> Select a Data Center: </div>
          <select className="az_drop" value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
            <option value="CCG1">CCG1</option>
            <option value="CCG2">CCG2</option>
            <option value="CCG3">CCG3</option>
          </select>
        </div>
        );
    }
}
