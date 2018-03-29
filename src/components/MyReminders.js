import React from 'react';
import { Link } from 'react-router-dom';
import AMC from '../AMC.PNG';

class MyReminders extends React.Component {
  render() {
    return (
      <div className="container-fluid myreminders text-center">
        <img className="padding" src={AMC} alt="AMC LOGO"/>
        <h3 className="padding">MEMBER EXCLUSIVE</h3>
        <span className="padding">Sign in with your AMC stubs account to use this feature. If you don't have one, you can join for free</span><br/>
        <button>SIGN IN</button><br/>
        <button><Link to='/createaccount'>JOIN NOW</Link></button><br/>
      </div>
    );
  }
}

export default MyReminders;
