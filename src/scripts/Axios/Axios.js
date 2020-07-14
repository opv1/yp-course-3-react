import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://praktikum.tk/cohort8'
    : 'https://praktikum.tk/cohort8';

export const axiosData = axios.create({
  baseURL,
  headers: {
    authorization: '7563ceef-3fab-429e-abe8-149027f36882',
    'Content-Type': 'application/json',
  },
});
