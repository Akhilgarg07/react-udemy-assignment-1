import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    useroutput:[
      {username:'akhilgarg07',age:21},
      {username:'deadth07',age:20}
    ]
  }

  usernameChangedHandler =(event) => {
    this.setState({
      useroutput:[
        {username:'akhilgarg07',age:20},
        {username:event.target.value,age:21}
      ]
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <UserOutput username={this.state.useroutput[0].username} age={this.state.useroutput[0].age}/>
      <UserOutput username={this.state.useroutput[1].username} age={this.state.useroutput[1].age} changed={this.usernameChangedHandler}/>
      <UserInput username={this.state.useroutput[1].username} click={this.usernameChangedHandler}/>
    </div>
  );
}
}

export default App;
