import { Router } from 'express'
import { getSpells, createSpell, getSpellsByUser } from '../controllers/spells.controller'

const router = Router()

// GET: List all spells
router.get("/", getSpells)
// GET: List spells by user name
router.get("/:nombre", getSpellsByUser)

// POST: Create a new spell
router.post("/", createSpell)

export default router
