import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: 'Krishna in class',
    };
  }
  componentWillUpdate() {
    console.log('I am updating');
  }
  componentDidMount() {
    console.log('I have mounted');
  }
  componentWillMount() {
    console.log('I will mount');
  }
  componentWillUnmount() {
    console.log('I am going to get destroyed');
  }
  handleClick = () => {
    this.setState(() => ({
      name: 'This is Bharath after click',
    }));
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.name}</div>;
  }
}
export default ClassComponent;
