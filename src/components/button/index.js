import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
  }

  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
      console.log("submitEvent");
    }
  }

  render() {
    const { buttonText } = this.props;

    return (
      <button onClick={this.submitEvent} data-test="buttonComponent">
        {buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default SharedButton;
