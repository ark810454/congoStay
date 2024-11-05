const mongoose = require('mongoose'); 

const etaSchema = mongoose.Schema({
  nomOfficiel: {type: String, required : true},
  pays: {type: String, required : true},
  adresse: { type: String, required: true },
  numHeberg: {type: String, required : true},
  ville: { type: String, required: true },
  province: {type: String, required: true},
  codePostale: {type: String, required: true},
  nom: {type: String, required : true},
  type: {type: String, required: true},
  nbrChambre: {type: String, required : true},
  nomJuridique: {type: String, required : true},
  devise: {type: String, required : true},
  userId: {type: String, required : true}
});

  

module.exports = mongoose.model('Etablissement', etaSchema);