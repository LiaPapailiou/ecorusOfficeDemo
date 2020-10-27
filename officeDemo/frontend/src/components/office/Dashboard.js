import React, { Fragment } from 'react';
import FormEmployees from './FormEmployees';
import FormOffice from './FormOffice';
import Employees from './Employees';
import Offices from './Offices';

export default function Dashboard() {
  return (
    <Fragment>
      {/* <FormEmployees />
      <FormOffice /> */}
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Add a new employee
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              <FormEmployees />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Add a new Office
          	</button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
            <FormOffice />
          </div>
        </div>
      </div>
      <Offices />
      <Employees />
    </Fragment>
  );
}
