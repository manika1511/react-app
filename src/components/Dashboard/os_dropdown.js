import React from 'react';

export default class OS_Dropdown extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectOS:"A",
    };
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({selectOS:e.target.value});
    this.props.change(e.target.value);
  }

  render() {
        return (
          <div>
            <select className="os-drop" value={this.state.selectOS} onChange={this.handleChange}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        );
    }
}
