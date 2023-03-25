const moongose = require("mongoose");

const Schema = moongose.Schema;

const MicroClaseSchema = new Schema({
    name: String,
    cursos: String,
    objetivos: String,
    descripcion: String,
    videos: Array,
    recursos: Array,
    actividadH5p: Object,
});

var MicroClase = moongose.model("MicroClase", MicroClaseSchema);

module.exports = MicroClase;