import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class AZ_Dropdown extends React.Component{
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
          <FetchRack />
          </div>
        );
    }
}




// class FetchDemo extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       posts: []
//     };
//   }
//
//   componentDidMount() {
//     axios.get('http://localhost:3001/helloworld')
//       .then(res => {
//         const posts = res.data.data.children;
//         this.setState({ posts });
//       });
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{`/r/${this.props.subreddit}`}</h1>
//         <ul>
//           {this.state.posts.map(post =>
//             <li key={post.id}>{post.title}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

class FetchRack extends React.Component{
  render() {
    return(
      axios.get('http://localhost:3001/helloworld')
      .then(function (response) {
        console.log(response); console.log(response.data); return response.data;
      })
    );
  }
}


class Dash_board extends React.Component{
  constructor(props){
    super(props);
    this.state={
        selectedValue:"CCG1",
    };
  }

  modifystate(val){
    console.log(val);
    this.setState({selectedValue: val});
  }

  // fetchRack(){
  //   return (
  //     fetch('http://localhost:3001/helloworld')
  //     .then((response) => {response.json(); console.log(response.json())})
  //     .then((responseJson) => {return responseJson.racks;})
  //     .catch((error) => {console.error(error);})
  //   );
  // }



  render() {
          return (
          <div>
          <AZ_Dropdown change={this.modifystate.bind(this)} />
          </div>
          );
      }
}

ReactDOM.render(<Dash_board />, document.getElementById("root"));
