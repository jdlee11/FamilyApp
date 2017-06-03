import React from 'react';
import settings from '../settings';
import session from '../models/session';
import { HashRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = { showError: false }
    this.signupFunction = this.signupFunction.bind(this);
  }
  componentDidMount(){
    //set state to trigger render
  }
  signupFunction(evt){
    console.log(evt);
    evt.preventDefault();
    session.clear();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let confirm = this.refs.confirm.value;
    console.log(username);

    this.setState({showError: true}); // use this change to redirect or display message

    // if (password === confirm && username !== ""){ // add other username conditions here
      // session.login(username, password, `https://baas.kinvey.com/user/${settings.appId}/`);
    // } else {
      // hashHistory.push("signup/error");
    // }
  }
  render(){
    console.log(this);
    if (this.state.showError){
      console.log("error, error");
    }
    return (
      <div className="signup-container">
        <div className="signup-div">
          <h2>Sign up</h2>
          <form onSubmit={this.signupFunction}>
            <input type="text" placeholder="username" ref="username"/>
            <input type="password" placeholder="password" ref="password"/>
            <input type="password" placeholder="confirm" ref="confirm"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Signup;
