import './index.scss';
import { dependency } from './dependency';

let response = dependency(true);
console.log('works?:', response);

document.getElementById('works').innerHTML = response;
