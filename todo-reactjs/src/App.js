import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoApp from './components/TodoApp.js'

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <TodoApp />
    </MuiThemeProvider>
    );
  }
}

export default App;
