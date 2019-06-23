import 'bootstrap';

import '../styles/main.scss';

// import projects from './helpers/projectData/projects';

import projectsData from './helpers/projectData/projectData';

const init = () => {
  // projects.projectStringBuilder();
  projectsData.getProjects();
};

init();
