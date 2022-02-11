import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import API from './api/fetchCounties';
import countryCardTpl from './components/countryCard.hbs';


const DEBOUNCE_DELAY = 300;

const inputValue = document.querySelector('#search-box');
let simpleCountry = document.querySelector('.country-info');

inputValue.addEventListener('input', debounce(search), DEBOUNCE_DELAY);

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
    const markup = countryCardTpl(country);
    simpleCountry.innerHTML = markup;
}

function onFetchError() {
    Notiflix.Notify.failure(`Oops, there is no country with that name`);
    simpleCountry.innerHTML = '';
}

