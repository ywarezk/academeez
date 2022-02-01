const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/courses-api',
    '<rootDir>/apps/academeez',
  ],
};
