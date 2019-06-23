
import util from '../util';

import work from './projectData';

const projectStringBuilder = () => {
  work.getProjects().then((projects) => {
    let domString = '';
    domString += '<div class="row">';
    console.error(projects);
    projects.forEach((project) => {
      domString += '<div class="col-3 offset-1">';
      domString += '<div class="card" style="width: 18rem;">';
      domString += '<img src="..." class="card-img-top" alt="...">';
      domString += '<div class="card-body text-center">';
      domString += '<h5 class="card-title">Card title</h5>';
      domString += `<p class="card-text">${project.description}</p>`;
      domString += `<a href="${project.url}" class="btn btn-primary web">Website</a>`;
      domString += `<a href="${project.githubUrl}" class="btn btn-primary git">Github</a>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    });
    domString += '</div>';
    util.printToDom('exercises', domString);
  })
    .catch(err => console.error('Could not get projects', err));
};

export default { projectStringBuilder };
