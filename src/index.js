import { supportList } from './support_list';

// console.log(supportList);

const url = new URL(
  'https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123'
);
console.log(url.search);
