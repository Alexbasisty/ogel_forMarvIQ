import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import MachineStatus from './Machine_stat';
import AssignmentA, { TaskALink } from './components/AssignmentA';
import AssignmentB, { TaskBLink } from './components/AssignmentB';
import Footer from './components/Footer';


const App = () => (
  <Router>
      <div>
        <div className="navlinks" >
          <Link to="/">Home</Link>
          <TaskALink />
          <TaskBLink />
        </div>

        <Switch>
          <Route exact path="/" component={MachineStatus} />
          <Route path="/assign/a" component={AssignmentA} />
          <Route path="/assign/b" component={AssignmentB} />
        </Switch>
        <Footer />
      </div>

  </Router>
)

export default App;
