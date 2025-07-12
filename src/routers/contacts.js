import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValid.js';
import { updateStudentSchema } from '../validation/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController)
);

router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController)
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchContactController)
);

router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController)
);

export default router;
