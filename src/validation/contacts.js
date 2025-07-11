import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must have at least 3 characters',
    'string.max': 'Name must have at most 20 characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.number().integer().min(6).max(15).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'string.email': 'Email must be a valid email address',
    }),
  isFavourite: Joi.boolean(),
});
