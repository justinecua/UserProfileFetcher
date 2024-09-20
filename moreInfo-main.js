import { MoreInfo } from './js/MoreInfo.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

MoreInfo(id);
