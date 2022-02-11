import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import countryCardTpl from './components/countryCard.hbs';
// import { getCountries } from './api/fetchCounties';

const DEBOUNCE_DELAY = 300;
const baseUrl = 'https://restcountries.com/v3.1/name/';
const inputValue = document.querySelector('#search-box');
let simpleCountry = document.querySelector('.country-info');

inputValue.addEventListener('input', debounce(search), DEBOUNCE_DELAY);

function search(e) {
    const name = e.target.value.trim();
    fetchCountry(name)
        .then(renderCountryCard)
        .catch(onFetchError)        
}

function fetchCountry(name) {
    return fetch(`${baseUrl}${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
        return response.json()
        })        
}

function renderCountryCard(country) {
    const markup = countryCardTpl(country);
    simpleCountry.innerHTML = markup;
}

function onFetchError() {
    Notiflix.Notify.failure(`Oops, there is no country with that name`);
    simpleCountry.innerHTML = '';
}

