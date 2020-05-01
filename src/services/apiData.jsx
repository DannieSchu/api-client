export const apiData = (url, method, json) => {
  fetch(url, { method, json })
    .then(res => res.json());
};
