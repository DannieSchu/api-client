export const apiData = (url, method, body) => {
  return fetch(url, {
    method,
    body
  })
    .then(response => response.json())
    .then(json => console.log(json));
};
//   return fetch(url, {
//     method,
//     body: JSON.stringify(body),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(response => response.json())
//     .then(json => console.log(json));
// };
