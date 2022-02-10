import { name } from '../index';

const { default: axios } = require("axios")

const baseUrl = 'https://restcountries.com/v3.1/name';

export const getCountries = (name) => {
    return axios.get(`${baseUrl}/${name}?fields=name,capital,population,flags,languages`);
}

