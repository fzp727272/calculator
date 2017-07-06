import React from 'react';
import InputDisplay from './InputDisplay.js'
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import recordButtonName from '../logic/RecordButtonName.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum:"",
      total: null,
      next: null,
      operation: null,

    };
  }

  handleClick = (buttonName) => {
        this.setState(recordButtonName(this.state, buttonName));
    this.setState(calculate(this.state, buttonName));

  }

  render() {
    return (
      <div className="component-app" >
     
       <Display
          value={this.state.next || this.state.total || '0'}
        > <InputDisplay  value={this.state.sum} />
        </Display>
        <ButtonPanel
          clickHandler={this.handleClick}
        />
      </div>

    );
  }
}
export default App;
