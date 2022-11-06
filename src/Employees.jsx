import { React, useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = () => {
  const [selectedTeam, setTeam] = useState("TeamB");
  const [employess, setEmployess] = useState([
    {
      id: 1,
      fullName: "John Doe",
      designation: "Manager",
      gender: "male",
      teamName: "teamA",
    },
    {
      id: 2,
      fullName: "Same Poppins",
      gender: "male",
      designation: "HR",
      teamName: "teamB",
    },
    {
      id: 3,
      fullName: "Jenifer Said",
      gender: "female",
      designation: "Frontend Developer",
      teamName: "teamB",
    },
    {
      id: 4,
      fullName: "Kat Saif",
      gender: "female",
      designation: "Quality Assurance",
      teamName: "teamC",
    },
    {
      id: 5,
      fullName: "Joseph Dsuza",
      gender: "male",
      designation: "Backend Developer",
      teamName: "teamD",
    },
    {
      id: 7,
      fullName: "Victoria Tarhun",
      gender: "female",
      designation: "Database Designer",
      teamName: "teamA",
    },
    {
      id: 8,
      fullName: "John Cooper",
      gender: "male",
      designation: "Full Stack Developer",
      teamName: "teamC",
    },
    {
      id: 9,
      fullame: "Nick Anderson",
      gender: "male",
      designation: "Frontend Developer",
      teamName: "teamD",
    },
    {
      id: 10,
      fullName: "Kely Simon",
      designation: "Data Scientist",
      gender: "femlae",
      teamName: "teamA",
    },
  ]);

  function handelTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="from-select form-select-lg"
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
                className="card m-2"
                style={{ cursor: "pointer" }}
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
