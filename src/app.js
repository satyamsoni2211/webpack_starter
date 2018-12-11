import React, { Component } from 'react';
import Name from './func';
import './main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        Hi ! this is react file
        <p> this is paragraph</p>
        <Name />
      </div>
    );
  }
}
