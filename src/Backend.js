const post = body => fetch('https://proof-checker-server.herokuapp.com', {
  method: 'POST',
  credentials: 'omit',
  // mode: 'no-cors',
  body,
}).then(res => res.json());

export default post;
