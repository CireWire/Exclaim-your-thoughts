import React from 'react';

export class Excitement extends React.Component
// This is where the magic is going to happen!
{
  componentDidMount() 
  {
    this.interval = setInterval (() => {this.props.addText('!');
  }, 1000);
  }

// It's gotta stop somehow or else we'll get a never ending loop of exclamation points!
componentWillUnmount(prevProps, prevState)
  {
  clearInterval(this.interval);
  }

render() 
  {
  return (
    <button onClick = {this.props.toggle}> Okay, stop it!</button>);
  }
}