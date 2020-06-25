import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Banner from './components/Banner';
import AssignmentA, { TaskALink } from './components/AssignmentA';
import AssignmentB, { TaskBLink } from './components/AssignmentB';
import AssignmentC, { TaskCLink } from './components/AssignmentC';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';


const App = () => (
  <Router>
      <div>
        <div className="navlinks" >
          <Link to="/">Home</Link>
          <TaskALink />
          <TaskBLink />
          <TaskCLink />
        </div>

        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/assign/a" component={AssignmentA} />
          <Route path="/assign/b" component={AssignmentB} />
          <Route path="/assign/c" component={AssignmentC} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>

  </Router>
)

export default App;
