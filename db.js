const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, // Utilisez 3306 ou 33060 selon votre configuration
    user: 'root',
    password: 'user4321..',
    database: 'test_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion : ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données');
});

module.exports = connection;
