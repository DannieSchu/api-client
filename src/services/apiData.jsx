export const apiData = (url, method, json) => {
  return fetch(url, { method, json })
    .then(res => res.json());
};
