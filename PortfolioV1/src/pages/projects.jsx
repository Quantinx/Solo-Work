import ProjectCards from "../components/ProjectCards";
import Data from "../data.json";
import { useState } from "react";
import { useEffect } from "react";
import NoResults from "../components/NoResults";

function ProjectsPage() {
  let Projects = Data;

  const [htmlChecked, updateHtmlChecked] = useState(true);
  const [cssChecked, updateCssChecked] = useState(true);
  const [jsChecked, updateJsChecked] = useState(true);
  const [reactChecked, updateReactChecked] = useState(true);
  const [tsChecked, updateTsChecked] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState(Projects);

  function filterResults() {
    let projectFilter = Projects;

    if (htmlChecked !== undefined && !htmlChecked) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("HTML")
      );
    }

    if (cssChecked !== undefined && !cssChecked) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("CSS")
      );
    }

    if (jsChecked !== undefined && !jsChecked) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("Javascript")
      );
    }

    if (reactChecked !== undefined && !reactChecked) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("React")
      );
    }

    if (tsChecked !== undefined && !tsChecked) {
      projectFilter = projectFilter.filter(
        (project) => !project.types.includes("TypeScript")
      );
    }

    setFilteredProjects(projectFilter);
  }

  useEffect(() => {
    filterResults();
  }, [htmlChecked, cssChecked, jsChecked, reactChecked, tsChecked]);

  return (
    <div>
      <div className="site-search">
        <label htmlFor="htmlCheckbox">
          {" "}
          <img src="src/assets/html.png" width={25} height={25}></img>
        </label>
        <input
          id="htmlCheckbox"
          type="checkbox"
          onChange={(e) => updateHtmlChecked(e.target.checked)}
          defaultChecked
        ></input>

        <label htmlFor="CSSCheckbox">
          <img src="src/assets/css.png" width={25} height={25}></img>
        </label>
        <input
          id="CSSCheckbox"
          type="checkbox"
          onChange={(e) => updateCssChecked(e.target.checked)}
          defaultChecked
        ></input>

        <label htmlFor="JSCheckbox">
          <img src="src/assets/javascript.png" width={25} height={25}></img>
        </label>
        <input
          id="JSCheckbox"
          type="checkbox"
          onChange={(e) => updateJsChecked(e.target.checked)}
          defaultChecked
        ></input>

        <label htmlFor="reactCheckbox">
          {" "}
          <img src="src/assets/react.png" width={25} height={25}></img>
        </label>
        <input
          id="reactCheckbox"
          type="checkbox"
          onChange={(e) => updateReactChecked(e.target.checked)}
          defaultChecked
        ></input>
        <label htmlFor="tsCheckbox">
          {" "}
          <img src="src/assets/typescript.png" width={25} height={25}></img>
        </label>
        <input
          id="tsCheckbox"
          type="checkbox"
          onChange={(e) => updateTsChecked(e.target.checked)}
          defaultChecked
        ></input>
      </div>
      <span className="card-container">
        {filteredProjects.map((filteredProjects) => (
          <ProjectCards project={filteredProjects} key={filteredProjects.id} />
        ))}
      </span>
      <NoResults displayElement={filteredProjects.length < 1} />
    </div>
  );
}

export default ProjectsPage;
