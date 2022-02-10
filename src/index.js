import './css/styles.css';
import { getCountries } from './api/fetchCounties';
import countryCardTemplate from './components/countryCard.hbs'

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('#search-box');
let name = '';
let simpleCountry = document.querySelector('.country-info');

inputValue.addEventListener('input', search);

function search(e) {
getCountries(name).then(({ data }) => {
    console.log(data);
});

    return name = inputValue.value.trim();
}

//    let countryMarkup = createCountry(getCountries);
// simpleCountry.insertAdjacentHTML('afterbegin', countryMarkup);

//     function createCountry(getCountries) {   
//     return getCountries.map(countryCardTemplate).join('');
//     }



