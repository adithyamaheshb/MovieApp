import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import InTheatres from './components/InTheatres';
import ComingSoon from './components/ComingSoon';
import MyReminders from './components/MyReminders';
import CreateAccount from './components/CreateAccount';
import CelebrateWithUs from './components/CelebrateWithUs';

class App extends React.Component {
    render() {
      return (
              <div>  
                <nav id="movie-navbar" className="navbar fixed-top navbar-dark bg-dark">
                    <Link to='/'>IN THEATRES</Link>
                    <Link to='/comingsoon'>COMING SOON</Link>
                    <Link to='/myremainders'>MY REMINDERS</Link>
                  </nav>
                <Route path="/" exact component={InTheatres} />
                <Route path="/comingsoon" component={ComingSoon} />
                <Route path="/myremainders" component={MyReminders} />
                <Route path="/createaccount" component={CreateAccount} />
                <Route path="/celebratewithus" component={CelebrateWithUs} />
              </div>
      );
    }
  }
  
  export default App;
  