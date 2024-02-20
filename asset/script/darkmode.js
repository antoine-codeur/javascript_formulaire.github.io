// Récupérer le bouton de bascule du mode sombre
const darkModeToggleBtn = document.getElementById('dark-mode-toggle-btn');

// Vérifier si le mode sombre est déjà activé dans le stockage local
const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

// Appliquer le mode sombre si nécessaire
if (isDarkModeEnabled) {
    document.body.classList.add('dark-mode');
    darkModeToggleBtn.checked = true;
}

// Ajouter un écouteur d'événements pour détecter les changements d'état
darkModeToggleBtn.addEventListener('change', function() {
    // Changer la classe du body en fonction de l'état du bouton de bascule
    document.body.classList.toggle('dark-mode', this.checked);

    // Mettre à jour le stockage local avec l'état du mode sombre
    localStorage.setItem('darkModeEnabled', this.checked);
});
