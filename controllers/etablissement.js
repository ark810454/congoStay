const Etablissement = require('../models/Etablissement') 
exports.createEtablissement = (req, res, next) => { 
        const etablissement = new Etablissement({
            ...req.body
        });
        etablissement.save()
          .then(() => res.status(201).json({ 
            message: 'Etablissement créé avec succès !'
           })) 
      .catch(error => res.status(500).json({ error }));
  };
