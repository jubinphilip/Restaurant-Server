import Joi from 'joi';


const menuValidationSchema = Joi.object({
title: Joi.string()
    .pattern(/^[a-zA-Z0-9\s]+$/) 
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.pattern.base': 'Title should only contain letters, numbers, and spaces',
      'string.empty': 'Title cannot be empty',
      'string.min': 'Title should have at least 3 characters',
      'string.max': 'Title should have at most 30 characters',
      'any.required': 'Title is required'
    }),
  description: Joi.string()
    .pattern(/^[a-zA-Z0-9\s]+$/) 
    .required()
    .messages({
        'string.pattern.base': 'description should only contain letters, numbers, and spaces',
        'string.empty': 'description cannot be empty',
        'string.min': 'description should have at least 3 characters',
        'string.max': 'description should have at most 30 characters',
        'any.required': 'description is required'
      }),


});

export default menuValidationSchema;