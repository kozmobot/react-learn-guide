import React from 'react';

import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses = [];
  let buttonStyle = '';
  if (props.showPersons) {
    buttonStyle = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>React Test App</h1>
      <p className={assignedClasses.join(' ')}>It's really working!</p>
      <button className={buttonStyle} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
