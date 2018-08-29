import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title:"click me"
      };
      this.loadingData.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" size="small" onClick={this.loadingData}>{this.state.title}</Button>
      </div>
    );
  }

  loadingData = (e) => {
      e.preventDefault();
      // let url = 'http://web-test.com:8082//user/showUser';
      let url = 'http://localhost:8082//user/showUser';
      fetch(url, {
          method: 'POST',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: 'id='+1,
      }).then(response => response.json()).then((res)=> {
          console.log(res);
          this.setState({
              title:res['email']
          });
      });
    }
}

export default App;