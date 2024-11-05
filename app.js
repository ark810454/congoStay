const express = require('express');
const mongoose = require('mongoose');
/* const stuffRoutes = require('./routes/stuff')
const path = require('path'); */
const userRoutes = require('./routes/user');
const etablissementRoutes = require('./routes/etablissement')
const app = express(); 

/* app.use('/images', express.static(path.join(__dirname, 'images'))); */

mongoose.connect('mongodb+srv://chris:lokole@cluster0.g1ll8.mongodb.net/congoStay?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(express.json());
 /*  app.use('/api/stuff', stuffRoutes);
  */
 app.use('/api/auth', userRoutes);
 app.use('/api/etablissement', etablissementRoutes)
module.exports = app; 