const local = {
  SERVER_URI: 'http://localhost:5000/'
}

const prod = {
  SERVER_URI: 'https://guess-who-infinite-server.herokuapp.com/'
}

export const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : local;
