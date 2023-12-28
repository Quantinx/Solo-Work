function ProjectCards(props) {
  const { project } = props;

  return (
    <div className="site-card">
      <div> Project Name: {project.name}</div>
      <div>
        Project URL: <a href={project.url}>{project.url}</a>
      </div>
      <img src={project.img}></img>
      <ul className="card-types-list">
        {project.types.map((item, index) => (
          <li key={index}>{item}. </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCards;
