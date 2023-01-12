import { Router } from 'express'

import { signInAdminValidator } from './sign-in-admin.validator'
import { signInAdminController } from './sign-in-admin.controller'
import { checkSchema } from 'express-validator'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'

export const signInAdminRoute: Router = Router()

signInAdminRoute.route('/')
    .post(asyncValidatorController(checkSchema(signInAdminValidator)), signInAdminController)