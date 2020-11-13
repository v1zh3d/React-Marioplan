import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gre-text text-darken-3">
        <Link to={"/project/" + project.id}>
          <span className="card-title">{project.title}</span>
        </Link>
        <div>
          Posted By {project.authorFirstName} {project.authorLastName}
        </div>
        <div>{moment(project.createdAt.toDate()).calendar()}</div>
      </div>
    </div>
  );
};

export default ProjectSummary;
