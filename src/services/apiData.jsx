export const apiData = (url, method, body, headers) => {
  return fetch(url, {
    method,
    body: method === 'post' || method === 'put' ? body.replace(/(\r\n|\n|\r)/gm, ' ').trim() : null,
    headers
  })
    .then(response => response.json());
};
