const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    Nombre: String,
    Tipo_Mascota: String,
    Sexo:String,
    Edad:String,
    Peso_Kg: String,
    Raza:String
});
module.exports =mongoose.model('ProAnd',Valor);
