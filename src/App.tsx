import * as React from 'react';
import DataSet from './components/dataset';
import './App.css';

const logo = require('./logo.svg');

interface Props extends React.Props<App> {
}

class App extends React.Component<Props, {}> {
  dataset: string = 'helo';
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacttt</h2>
        </div>
        <div className="data__set">
          <DataSet items={this.dataset} />
        </div>
      </div>
    );
  }
}

export default App;
