import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import { ipcRenderer } from 'electron'

const Hello = () => {
  const sendMessage = () => {
    ipcRenderer.send('send-message', 'hello world');
  }

  ipcRenderer.on('recieve-message', (_event, msg) => {
    console.log(msg);
  });

  return (
    <div className="hello">
      <Button
        onClick={sendMessage}
        color="primary"
        variant="contained"
      >
        Send hello
      </Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Link to="/todo">
        Todo
      </Link>

      <Switch>
        <Route path="/todo" component={Todo} />
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
