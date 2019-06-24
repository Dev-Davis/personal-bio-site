// import $ from 'jquery';

import util from '../util';

import work from './projectData';

const projectStringBuilder = () => {
  work.getProjects().then((projects) => {
    let domString = '';
    domString += '<div class="row">';
    projects.forEach((project) => {
      domString += '<div class="col-4">';
      domString += '<div class="card" style="width: 19rem;">';
      domString += `<img src="${project.screenshot}" class="card-img-top proj-image" alt="Project Image">`;
      domString += '<div class="card-body text-center proj-body">';
      domString += `<h5 class="card-title">${project.title}</h5>`;
      domString += `<p class="card-text description">${project.description}</p>`;
      domString += `<button class="web"><a href="${project.url}">Website</a></button>`;
      domString += `<button class="git"><a href="${project.githubUrl}">Github</a></button>`;
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
