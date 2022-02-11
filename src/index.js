import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import API from './api/fetchCounties';
import countryCardTpl from './components/countryCard.hbs';
import countryListTpl from './components/countryList.hbs';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('#search-box');
let simpleCountry = document.querySelector('.country-info');

inputValue.addEventListener('input', debounce(search, DEBOUNCE_DELAY));

function search(e) {
    const name = e.target.value.trim();
        clearRender();        
    if (name.length === 0) {
        return;
    }
    API.fetchCountry(name)
        .then(renderCountryCard)
        .catch(onFetchError)        
}

function clearRender() {
    simpleCountry.innerHTML = '';
}

function renderCountryCard(country) {
    if (country.length > 10) {
        Notiflix.Notify.info(`Oops, there is no country with that name`);
    }
    if (1 < country.length && country.length < 10) {
        const markup = countryListTpl(country);
        simpleCountry.innerHTML = markup;
    }
    else if (country.length === 1) {
        const markup = countryCardTpl(country);
        simpleCountry.innerHTML = markup;
    }
}

function onFetchError() {
    Notiflix.Notify.failure(`Oops, there is no country with that name`);
    simpleCountry.innerHTML = '';
}

