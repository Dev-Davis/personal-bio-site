import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const projectsResults = results.data;
      const projects = [];
      Object.keys(projectsResults).forEach((projectId) => {
        projectsResults[projectId].id = projectId;
        projects.push(projectsResults[projectId]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjects };
