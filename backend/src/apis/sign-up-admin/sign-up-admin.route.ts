import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {checkSchema, param} from 'express-validator';
import {signUpAdminValidator} from "./sign-up-admin.validator";
import {signUpAdminController} from "./sign-up-admin.controllers";
import {activationAdminController} from "./activation-admin.controller";

export const signUpAdminRoute = Router()

signUpAdminRoute.route('/').post(asyncValidatorController(checkSchema(signUpAdminValidator)), signUpAdminController)

signUpAdminRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        activationAdminController
    )