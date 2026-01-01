const url = require('url')

const myUrl = new URL('https://example.com:8080/path/name?query=hello#hash')
console.log('Host:', myUrl.host);
console.log('Pathname:', myUrl.pathname);
console.log('Search Params:', myUrl.searchParams.get('query'));
