import { Router } from 'express'
import { getSpells, createSpell, getSpellsByUser, deleteSpell, editSpell } from '../controllers/spells.controller'

const router = Router()

// GET: List all spells
router.get("/", getSpells)
// GET: List spells by user name
router.get("/:nombre", getSpellsByUser)

// POST: Create a new spell
router.post("/", createSpell)

// PUT: Edit a spell
router.put("/", editSpell)

// DELETE: Delete a spell
router.delete("/:id/:password", deleteSpell)




export default router
