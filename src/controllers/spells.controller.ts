import spell from '../models/spell'

const password = process.env.passwordSecret

export const getSpells = async (req,res) => {
    try{
        const spellList = await spell.find()
        res.json(spellList)
    }catch(error){
        console.log(error)
    }
}

export const createSpell = async (req,res) => {
    try{

        if(req.body.password !== password){
            return res.status(401).json({message: "Unauthorized"})
        }

        const newSpell = new spell(req.body)
        const savedSpell = await newSpell.save()
        res.json(savedSpell)
    }catch(error){
        console.log(error)
    }
}

export const getSpellsByUser = async (req,res) => {
    try{
        const nombre = req.params.nombre 
        const spells = await spell.find({ usuariosConHechizo: nombre })

        res.json(spells)
    }catch(error){
        console.log(error)
    }
}
