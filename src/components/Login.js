import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideBar from './SideBar';

import {
  Page
} from 'react-onsenui';

import {
  Input,
  Button
  } from 'react-onsenui';

import '../css/card.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorRaised: false
    };
  }

  login(e) {
    e.preventDefault();
    var user = ReactDOM.findDOMNode(this.refs.user).value.trim();
    var pass = ReactDOM.findDOMNode(this.refs.pass).value.trim();
    if (user === 'abc' && pass === 'abc') {
      this.props.navigator.pushPage({component: SideBar}, {animation: 'slide'});
    } else {
      this.setState({errorRaised: true});
    }
    return;
  }

  displayError() {
    if (this.state.errorRaised) {
      return (<div className='showError'>Login failed</div>);
    }
  }

  render() {
    return (
      <Page className='login-page' key='loginPage'>
        <div className='login'>
          <div style={{backgroundColor: 'white', padding: 30}}>
          <Input type='text'
            modifier='underbar'
            placeholder='Username'
            autoCapitalize= 'none'
            ref='user'
            validate='required'
            className='username'
            />
          <Input type='password'
            modifier='underbar'
            placeholder='Password'
            ref='pass'
            className='password'
            />
          <Button className='center'
             modifier='thick center large--cta'
             style={{backgroundColor: '#29A3CC'}}
             onClick={this.login.bind(this)}
             className='submit-button'
            >
            Login
          </Button>
          <div>
            {this.displayError()}
          </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Login;
