import React, { Fragment } from 'react';
import FormEmployees from './FormEmployees';
import FormOffice from './FormOffice';
import Employees from './Employees';
import Offices from './Offices';

export default function Dashboard() {
  return (
    <Fragment>
      <FormEmployees />
      <FormOffice />
      <Offices />
      <Employees />
    </Fragment>
  );
}
