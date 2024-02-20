function capitalizeFirstLetter(text) {
    return text.replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); });
}

function validateField(element) {
    switch (element.name) {
        case 'firstName':
        case 'city':
        case 'nationality':
        case 'birthCountry':
            return /^[A-Z][a-z]*$/.test(element.value);
        case 'lastName':
            return /^[A-Z\s\-]+$/.test(element.value);
        case 'postalAddress':
        case 'occupation':
        case 'socialSecurityNumber':
        case 'passportNumber':
            return /^[a-zA-Z\s\-]+$/.test(element.value);
        case 'age':
            let age = parseInt(element.value, 10);
            return !isNaN(age) && age >= 0 && age <= 120;
        case 'email':
            return /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/i.test(email);
        case 'postalCode':
            return /^\d{4,5}$/.test(element.value);
        case 'gender':
            return element.value !== '';
        case 'birthDate':
        case 'passportIssueDate':
        case 'passportExpiryDate':
            return true;
        default:
            return true;
    }
}

document.querySelectorAll('input[type="text"]').forEach(function(element) {
    element.addEventListener('blur', function(event) {
        let inputValue = event.target.value.trim();
        if (event.target.name !== 'lastName') {
            event.target.value = capitalizeFirstLetter(inputValue);
        } else {
            event.target.value = inputValue.toUpperCase(); 
        }
    });
});

window.addEventListener('load', function() {
    let formFields = document.querySelectorAll('input, select');
    formFields.forEach(function(field) {    
        let savedValue = localStorage.getItem(field.id);

        if (savedValue !== null) {
            if (field.name === 'lastName') { 
                field.value = savedValue.toUpperCase();
            } else if (field.name === 'postalAddress') {   
                field.value = savedValue.replace(/(?:^|\s)(\S)/g, function(match) {
                    return match.toUpperCase();
                });
            } else {   
                field.value = savedValue.replace(/(?:^|\s|-)(\S)/g, function(match) {
                    return match.toUpperCase();
                });
            }            
            if (field.name === 'email') {
                field.value = savedValue.toLowerCase();
            }
        }
    });
});
