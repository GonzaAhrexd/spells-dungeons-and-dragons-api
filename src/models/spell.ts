import mongoose from 'mongoose'

const spellSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        requierd: true,
        unique: true
    },
    potencia: {
        type: Number,
        required: true
    },
    nivel: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    usuariosConHechizo: {
        type: [String],
        required: false
    }
    

})

const spell = mongoose.model("spell", spellSchema)

export default spell