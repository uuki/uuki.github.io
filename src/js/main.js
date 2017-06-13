const $ = require('./libs/jquery.js');
window.jQuery = $;

import Project from './project';
$(() => new Project('html'));