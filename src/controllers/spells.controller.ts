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

        console.log(req.body)

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

export const deleteSpell = async (req,res) => {
    try{
        const { id, password } = req.params
        if(password !== process.env.passwordSecret){
            return res.status(401).json({message: "Unauthorized"})
        }
        const deletedSpell = await spell.findByIdAndDelete(id)
        if(!deletedSpell){
            return res.status(404).json({message: "Spell not found"})
        }
        res.json({message: "Spell deleted successfully"})
    }catch(error){
        console.log(error)
    }
}

export const editSpell = async (req,res) => {
    try{
        const { _id, pass } = req.body

        console.log(req.body)

        if(pass !== process.env.passwordSecret){
            return res.status(401).json({message: "Unauthorized"})
        }

        const spellEdited = await spell.findByIdAndUpdate(_id, req.body, { new: true })
        if(!spellEdited){
            return res.status(404).json({message: "Spell not found"})
        }


        res.json(spellEdited)

    }catch(error){
        console.log(error)
    }
}