import Reports from 'pages/Reports';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/reports'>
            <Reports />
          </Route>
          <Route path='/'>
            <Redirect to='reports' />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
