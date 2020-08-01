import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PageRenderer from './page-renderer'
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route exact path="/:page" component={PageRenderer} />
        <Route path="/" render={() => <Redirect to="/home" />} />
        {/* <Route component={() => 404} /> */}


      </div>
    </Router>

  );
}

export default App;
