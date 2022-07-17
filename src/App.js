import React, {Component} from "react";
import MainContainer from "../src/Header/header"

class App extends Component {
  constructor(){
    super()
    this.state={
      name: "Developer"
    }
  }

  changeName = ()=>{
    this.setState({name : 'Developers Hangout!!!'});
  }

  render(){
    return (
      <MainContainer />

      // <div className="App">
      //  `welcome {this.state.name} !`
      //  <button onClick={this.changeName}>Click!</button>
      // </div>
    );
  }
}

export default App;
