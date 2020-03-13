import sendRequest from './PopularRequests.js';
import { popularLoad, searchList } from './handlers.js';
sendRequest(popularLoad);
import listRequests from './listRequests.js';
let input = $(':input');

input.on('keyup', listRequests);
// input.on('keyup', function () {

//     console.log($(input).val());

// });