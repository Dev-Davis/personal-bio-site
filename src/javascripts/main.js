import 'bootstrap';

import '../styles/main.scss';

import projects from './helpers/projectData/projects';

const init = () => {
  projects.projectStringBuilder();
};

init();
