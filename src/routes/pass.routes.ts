import { checkPassword } from '../controllers/pass.controller';
import { Router } from 'express';

const router = Router();

router.get('/:password', checkPassword);

export default router;
