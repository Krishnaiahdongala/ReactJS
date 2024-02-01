import React, { Component } from 'react';

class YourComponent extends Component {
  constructor(props) {
    super(props);

    // Initialize state with version from localStorage or a default value
    this.state = {
      version: localStorage.getItem('version') || 'initialVersion',
    };
  }

  componentDidMount() {
    // Check if the version in state is different from the one in localStorage
    // If different, update the version in state with the one from localStorage
    if (this.state.version !== localStorage.getItem('version')) {
      this.setState({ version: localStorage.getItem('version') });
    }
  }

  handleClick = () => {
    // Change the version in state when the button is clicked
    const newVersion = this.state.version === 'oldVersion' ? 'newVersion' : 'oldVersion';
    this.setState({ version: newVersion });

    // Update the version in localStorage
    localStorage.setItem('version', newVersion);
  };

  render() {
    return (
      <div>
        <p>Current Version: {this.state.version}</p>
        <button onClick={this.handleClick}>Change Version</button>
      </div>
    );
  }
}

export default YourComponent;
