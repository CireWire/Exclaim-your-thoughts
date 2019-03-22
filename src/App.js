import React, { Component } from 'react';
import { Excitement } from './Excitement.js';
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      excited: false,
      text: ''
    };

// Let's handle some events, shall we?
    this.toggleExcitement = this.toggleExcitement.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleExcitement(){
    this.setState({
      excited: !this.state.excited
      });
  }

  setText(text){
    this.setState ({text: text});
  }

  addText(newText){
    let text = this.state.text + newText;
    this.setState({text: text});
  }

  handleChange(e){
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.excited) {
      button = (
        <Excitement toggle={this.toggleExcitement} addText={this.addText} />
      );
    } else {
     button = (<button onClick = {this.toggleExcitement}>Add some spirit!</button>);
     }

   return (
    <div>
      <h1>Exclaim your thoughts</h1>
      <textarea rows ="7" cols = "40" value = {this.state.text} onChange = {this.handleChange}></textarea>
        {button}
      <h2>{this.state.text}</h2>
    </div>
  );
  }  
}