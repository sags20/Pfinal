const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


    var IDESchema = Schema({
        nombre: {
            type: String,
            required: true,
            unique: true
        },
        desarrollador:String,
        lanzamiento: String,
         programado:String,
         SO:String
    });
    
    module.exports = mongoose.model("IDE", IDESchema);