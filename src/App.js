import React, { Fragment, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/home';
import AboutMe from './views/aboutMe';
import Projects from './views/projects';
// import Contact from './views/contact';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Sidebar /> 
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
            <Route path={process.env.PUBLIC_URL + '/aboutMe'} exact component={AboutMe} />
            <Route path={process.env.PUBLIC_URL + "/projects"} exact component={Projects} />
            {/* <Route path={process.env.PUBLIC_URL + "/contact"} exact component={Contact} /> */}
          </Switch> 
        </Router>
      </Fragment>
    );
  }
}

export default App;
