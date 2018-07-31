import React, { Component } from 'react';
import Picker from './picker';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
      <h1 className="grid_title">Birthday Countdown</h1>
      
        <div className="grid_skew-dark-one-box"></div>
        <div className="grid_skew-dark-two"></div>
        <div className="grid_skew-dark-three"></div>
        
        <div className="grid_skew-light-one"></div>
        <div className="grid_skew-light-two"></div>
        <div className="grid_skew-light-three-box"></div>
        
        <Picker/>
      </div>
    );
  }
}
