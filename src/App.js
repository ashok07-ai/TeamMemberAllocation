import "./App.css";
import Employees from "./Employees";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";


function App() {
  const [selectedTeam, setTeam] = useState("TeamB");
  const [employess, setEmployess] = useState([
    {
      id: 1,
      fullName: "John Doe",
      designation: "Manager",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Same Poppins",
      gender: "male",
      designation: "HR",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Jenifer Said",
      gender: "female",
      designation: "Frontend Developer",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Kat Saif",
      gender: "female",
      designation: "Quality Assurance",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "Joseph Dsuza",
      gender: "male",
      designation: "Backend Developer",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Victoria Tarhun",
      gender: "female",
      designation: "Database Designer",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "John Cooper",
      gender: "male",
      designation: "Full Stack Developer",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullame: "Nick Anderson",
      gender: "male",
      designation: "Frontend Developer",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Kely Simon",
      designation: "Data Scientist",
      gender: "femlae",
      teamName: "TeamC",
    },
  ]);

  function handelTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    console.log(event.currentTarget.id);
    const transformedEmployees = employess.map((employeeInfo) => employeeInfo.id === parseInt(event.currentTarget.id)
      ? (employeeInfo.teamName === selectedTeam) ? { ...employeeInfo, teamName: '' } : { ...employeeInfo, teamName: selectedTeam } : employeeInfo);

    setEmployess(transformedEmployees)
  }


  return (
    <div>
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employess.filter((employeeFilteredInfo) => employeeFilteredInfo.teamName === selectedTeam).length} />
      <Employees employess={employess}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handelTeamSelectionChange={handelTeamSelectionChange} />
      <Footer />
    </div>
  );
}

export default App;
