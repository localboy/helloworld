import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { Navigation, Home, TodoList, Weather } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/todo-list" exact component={() => <TodoList />} />
          <Route path="/weather" exact component={() => <Weather />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
