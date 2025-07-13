import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello Everyone!',
  });
});

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

export default router;
