import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input} from 'antd';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title:"click me",
          userName:""
      };
      this.loadingData.bind(this);
  }
  render() {
      const { userName } = this.state;
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


      <Input
      placeholder="Enter your username"
            value={userName}
            onChange={this.onChangeUserName}
        />

      </div>
    );
  }
  onChangeUserName = (e) => {
      this.setState({ userName: e.target.value });
  }

  loadingData = (e) => {
      e.preventDefault();
      let url = 'http://localhost:8902/user/showUser';
      fetch(url, {
          method: 'POST',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: 'id='+1,
      }).then(response => response.json()).then((res)=> {
          console.log(res);
          this.setState({
              title:res['userName']
          });
      });
    }
}

export default App;