import React, { Component } from 'react';
import './App.css';
import { Button, Input} from 'antd';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title: "login",
          username: "",
          password: ""
      };
      this.loadingData.bind(this);
  }
  render() {
      const { username } = this.state;
      const { password } = this.state;
    return (
      <div className="App">
          <div className="App-login-text">
              <Input style={{width: 300}}
                     placeholder="Enter your username"
                     value={username}
                     onChange={this.onChangeUserName}
              />
              <br />
              <Input.Password style={{width: 300, alignItems: 'flex-start', justifyContent: 'flex-start'}}
                     placeholder="Enter your password"
                     value={password}
                     visibilityToggle={true}
                     onChange={this.onChangePassword}
              />
              <br />
              <Button type="primary" onClick={this.loadingData}>{this.state.title}</Button>
          </div>
      </div>
    );
  }
  onChangeUserName = (e) => {
      this.setState({ username: e.target.value });
  }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

  loadingData = (e) => {
      e.preventDefault();
      let url = 'http://localhost:8902/user/showUser';
      fetch(url, {
          method: 'POST',
          headers: {
              // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              "Content-Type": "application/json; charset=UTF-8"
          },
          mode:'cors',
          cache:'default'
      }).then(response => response.json()).then((res)=> {
          console.log(res);
          this.setState({
              title:res['username']
          });
      });
    }
}

export default App;