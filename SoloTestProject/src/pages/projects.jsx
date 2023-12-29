import ProjectCards from "../components/ProjectCards";
import Search from "../components/Search";
import Data from "../data.json";
import { useState } from "react";
import { useEffect } from "react";

function Projects() {
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

    if (receivedData.html !== undefined && !receivedData.html) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("HTML")
      );
    }

    if (receivedData.CSS !== undefined && !receivedData.CSS) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("CSS")
      );
    }

    if (receivedData.JS !== undefined && !receivedData.JS) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("Javascript")
      );
    }

    if (receivedData.Rct !== undefined && !receivedData.Rct) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("React")
      );
    }

    if (receivedData.TS !== undefined && !receivedData.TS) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("TypeScript")
      );
    }

    setFilteredProjects(projectFilter);
  }

  return (
    <>
      <Search sendData={recieveData} />
      <span className="card-container">
        {filteredProjects.map((filteredProjects) => (
          <ProjectCards project={filteredProjects} key={filteredProjects.id} />
        ))}
      </span>
    </>
  );
}

export default Projects;
