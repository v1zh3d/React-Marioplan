import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  if (projects) {
    if (projects.length > 0) {
      return (
        <div className="project-list section">
          {projects &&
            projects.map((project) => {
              return <ProjectSummary project={project} key={project.id} />;
            })}
        </div>
      );
    } else {
      return (
        <div className="container center">
          <h6 className="red-text">No Projects Found!</h6>
        </div>
      );
    }
  } else {
    return (
      <div className="container center">
        <h6>Loading projects list...</h6>
      </div>
    );
  }
};

export default ProjectList;
