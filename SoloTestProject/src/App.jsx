import Header from "./components/Header";
import ProjectCards from "./components/ProjectCards";
import "./App.css";
import Search from "./components/Search";
import Data from "./data.json";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let Projects = Data;
  const [receivedData, setReceivedData] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(Projects);

  function recieveData(data) {
    setReceivedData(data);
  }

  useEffect(() => {
    if (!receivedData) {
      console.log("No string, returning from function");
      return;
    }
    console.log(receivedData);
    filterResults();
  }, [receivedData]);

  function filterResults() {
    let projectFilter = Projects;

    if (!receivedData.html) {
      projectFilter = filteredProjects.filter(
        (filteredProjects) =>
          !filteredProjects.types.some((type) => type === "HTML")
      );
      console.log(projectFilter);
    }

    if (!receivedData.CSS) {
      projectFilter = filteredProjects.filter(
        (filteredProjects) =>
          !filteredProjects.types.some((type) => type === "CSS")
      );
      console.log(projectFilter);
    }

    if (!receivedData.JS) {
      projectFilter = filteredProjects.filter(
        (filteredProjects) =>
          !filteredProjects.types.some((type) => type === "Javascript")
      );
      console.log(projectFilter);
    }
    if (!receivedData.React) {
      projectFilter = filteredProjects.filter(
        (filteredProjects) =>
          !filteredProjects.types.some((type) => type === "React")
      );
      console.log(projectFilter);
    }
    if (!receivedData.TS) {
      projectFilter = filteredProjects.filter(
        (filteredProjects) =>
          !filteredProjects.types.some((type) => type === "TypeScript")
      );
      console.log(projectFilter);
    }

    setFilteredProjects(projectFilter);
  }

  return (
    <>
      <Header></Header>
      <Search sendData={recieveData} />
      <span className="card-container">
        {filteredProjects.map((filteredProjects) => (
          <ProjectCards project={filteredProjects} key={filteredProjects.id} />
        ))}
      </span>
    </>
  );
}

export default App;
