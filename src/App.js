import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import React from 'react';

class App extends React.Component{

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.props.age}
        </p>
        <button onClick={this.props.onAgeUp}>increase</button>
        <button onClick={this.props.onAgeDown}>decrease</button>
      </header>
    </div>
  )
};
}

const mapStateToProps=(state)=>{
  return {age: state.age}
}

const mapDispatchToProps=(dispatch)=>{
return{
  onAgeUp:()=>dispatch({type:'AGEUP'}),
  onAgeDown:()=>dispatch({type:"AGEDOWN"})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
