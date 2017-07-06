import React from 'react';
import './InputDisplay.css';

class InputDisplay extends React.Component {
  render() {
    return (
      <div className="InputDisplayContainer" >
       <div>
        {this.props.value}
        </div>
      </div>
    );
  }
}
InputDisplay.propTypes = {
  value: React.PropTypes.string,
};
export default InputDisplay;
