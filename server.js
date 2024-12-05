const express = require('express');
const path = require('path');
const app = express();
const port = 8380;

// Utiliser body-parser pour analyser les requêtes POST
app.use(express.urlencoded({ extended: true }));

// Définir le dossier public pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
