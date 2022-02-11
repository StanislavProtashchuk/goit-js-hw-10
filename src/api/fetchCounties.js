const baseUrl = 'https://restcountries.com/v3.1/name/';

function fetchCountry(name) {
    return fetch(`${baseUrl}${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}

export default { fetchCountry };