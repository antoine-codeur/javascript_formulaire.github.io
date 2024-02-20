document.addEventListener('DOMContentLoaded', function() {
    // Chemin vers votre fichier JSON
    const jsonPath = 'asset/script/json/countries_and_nationalities.json';

    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            const countriesElement = document.getElementById('countries');
            const nationalitiesElement = document.getElementById('nationalities');

            data.forEach(item => {
                // Ajout des pays au datalist des pays
                let optionCountry = document.createElement('option');
                optionCountry.value = item.country;
                countriesElement.appendChild(optionCountry);

                // Ajout des nationalités au datalist des nationalités
                let optionNationality = document.createElement('option');
                optionNationality.value = item.nationality;
                nationalitiesElement.appendChild(optionNationality);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Gestionnaire pour la saisie sur le champ de nationalité
    document.getElementById('nationality').addEventListener('input', function() {
        const selectedNationality = this.value;
        fetch(jsonPath)
            .then(response => response.json())
            .then(data => {
                const nationalityData = data.find(item => item.nationality === selectedNationality);
                if (nationalityData) {
                    document.getElementById('birthCountry').value = nationalityData.country;
                }
            });
    });
});
