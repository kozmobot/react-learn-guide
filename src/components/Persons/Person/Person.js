import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  componentWillUnmount() {
    console.log('[Person.js] Inside componentWillUnmount()');
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and I'm {this.props.age} old.
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => (this.inputElement = inp)}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
    // return [
    //   <p key="1" onClick={this.props.click}>
    //     I am {this.props.name} and I'm {this.props.age} old.
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input
    //     key="3"
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func
};

export default withClass(Person, classes.person);
