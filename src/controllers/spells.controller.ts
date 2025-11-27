import spell from '../models/spell'

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
        const newSpell = new spell(req.body)
        const savedSpell = await newSpell.save()
        res.json(savedSpell)
    }catch(error){
        console.log(error)
    }
}

