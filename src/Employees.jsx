import { React } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = ({ employess, selectedTeam, handleEmployeeCardClick, handelTeamSelectionChange }) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="from-select form-select-lg w-100"
            value={selectedTeam}
            onChange={handelTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employess.map((employeeDetails) => (
              <div
                key={employeeDetails.id}
                id={employeeDetails.id}
                className={(employeeDetails.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}
                style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}
              >
                {employeeDetails.gender === "male" ? (
                  <img
                    src={maleProfile}
                    alt={employeeDetails.fullName}
                    className="card-img-top"
                  />
                ) : (
                  <img
                    src={femaleProfile}
                    alt={employeeDetails.fullName}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h6 className="card-title">
                    Full Name: {employeeDetails.fullName}
                  </h6>
                  <p className="card-text">
                    <b>Designation:</b> {employeeDetails.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
