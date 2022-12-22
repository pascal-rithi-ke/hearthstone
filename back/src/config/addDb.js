const axios = require('axios');
const mysql = require('mysql');

// Connexion à la base de données
const db = mysql.createConnection({
  host: 'mysql-projethearthstone.alwaysdata.net',
  user: '293674',
  password: 'pi7GWtyqhUYiwb8_hearthStone',
  database: 'projethearthstone_1'
});

// Récupération des données de l'API
axios.get('https://api.hearthstonejson.com/v1/22115/frFR/cards.collectible.json', { 
  headers: { "Accept-Encoding": "gzip,deflate,compress" } 
}).then((res) => {
    console.log(res.data)
    const query = "INSERT INTO cards (name, playerClass, rarity, cost, type, spell, attack, health) VALUES ?";
    const values = res.data.map(card => [card.name, card.playerClass, card.rarity, card.cost, card.type, card.text, card.attack, card.health]);

    // Exécution de la requête
    db.query(query, [values], (error, results, fields) => {
      if (error) throw error;
      console.log(results.affectedRows + " records inserted");
    }); 
  }).catch((err) => {
    console.error("error axios", err);
  });
