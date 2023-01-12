import { Request, Response } from 'express'
import 'express-session'
import { v4 as uuid } from 'uuid'
import { generateJwt, validatePassword } from '../../utils/auth.utils'
import { Admin, selectAdminByAdminEmail } from '../../utils/models/Admin'

export async function signInAdminController (request: Request, response: Response): Promise<Response> {
    try {
        const { email, password } = request.body
        const admin = await selectAdminByAdminEmail(email)

        return (admin !== null) && await validatePassword(admin.adminHash, password)
            ? signInSuccessful(request, response, admin)
            : signInFailed(response)
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message })
    }
}

function signInFailed (response: Response): Response {
    return response.json({ status: 400, message: 'Email or password is incorrect please try again.', data: null })
}

function signInSuccessful (request: Request, response: Response, admin: Admin): Response {
    const { adminId, adminName, adminEmail } = admin
    const signature: string = uuid()
    const authorization: string = generateJwt({
        adminId,
        adminName,
        adminEmail
    }, signature)

    request.session.admin = admin
    request.session.jwt = authorization
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({ status: 200, message: 'Sign in successful', data: null })
}