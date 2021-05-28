import React, { Component } from 'react';
import './LoadingStyle.css';

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" alt="Carregando" />
        <div>Carregando...</div>
      </div>
    );
  }
}

export default Loading;
