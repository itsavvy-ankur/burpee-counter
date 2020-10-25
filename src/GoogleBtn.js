import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Bar from './Bar';


const CLIENT_ID = '199091499555-e7i8djcqrm07a218ikj91k8p67eu6hn2.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      username: '',
      firstname:'',
      lastname:''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        username: response.profileObj.email,
        firstname: response.profileObj.givenName,
        lastname: response.profileObj.familyName

      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div className="GoogleBtn">
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: 
        
        <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login to add your burpees!'
          onSuccess={ this.login }
          isSignedIn={true}
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
        
      }
      { this.state.isLogined ? <h5>Hello: <br/><br/>{this.state.firstname} !</h5> : null}
      { this.state.accessToken1 ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }
      { this.state.isLogined? <div><h5>Your Burpee Count !</h5> <Bar/> </div> : null}
      
    </div>
    )
  }
}

export default GoogleBtn;
