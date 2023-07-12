import sidebar from '../content-yaml/sidebar.yaml';
import profile from './profile.yaml';
import experience from './experience.yaml';
import projects from './projects.yaml';


// const YAML = require('yaml');
// const fs = require('fs');


// const sidebarYaml = require('../content-yaml/sidebar.yaml');
// const sidebarYaml = fs.readFileSync('../content-yaml/sidebar.yaml', 'utf-8');

// const sidebarSub = YAML.parse(sidebarYaml);
// const sidebarSub = yaml.parse(fs.readFileSync('../content-yaml/sidebar.yaml'));
// console.log(`sidebar yaml file content:${sidebarYaml}`);
// console.log(`sidebarSub:${sidebarYaml}`);

export const data = {
  sidebar,
  profile,
  experience,
  projects,
};

export default data;
