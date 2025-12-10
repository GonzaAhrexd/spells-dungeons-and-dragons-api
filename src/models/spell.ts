import mongoose from 'mongoose'

const spellSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        requierd: true,
    },
    potencia: {
        type: Number,
        required: false
    },
    nivel: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    tipoRuna: {
        type: String,
        required: false
    },
    usuariosConHechizo: {
        type: [String],
        required: false
    }
    

})

const spell = mongoose.model("spell", spellSchema)

export default spell