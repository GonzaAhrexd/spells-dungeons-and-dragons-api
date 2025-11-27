import { Router } from 'express'
import { getSpells, createSpell } from '../controllers/spells.controller'

const router = Router()

// GET: List all spells
router.get("/", getSpells)

// POST: Create a new spell
router.post("/", createSpell)

export default router
