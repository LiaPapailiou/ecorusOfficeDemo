import React, { Fragment } from 'react';
import Form from './Form';
import Employees from './Employees';
import Offices from './Offices';

export default function Dashboard() {
  return (
    <Fragment>
      {/* <Form /> */ }
      <Offices />
      <Employees />
    </Fragment>
  );
}
