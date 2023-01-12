import { NextFunction, Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import {Admin, selectAdminByAdminActivationToken, updateAdmin} from "../../utils/models/Admin";

export async function activationAdminController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { activation } = request.params
        const admin = await selectAdminByAdminActivationToken(activation)

        const activationFailed = (): Response => response.json({
            status: 400,
            data: null,
            message: 'Account activation has failed. Have you already activated this account'
        })

        const activationSucceeded = async (admin: Admin): Promise<Response> => {
            const updatedAdmin = { ...admin, adminActivationToken: null }
            await updateAdmin(updatedAdmin)
            return response.json({
                status: 200,
                data: null,
                message: 'Account activation was successful'
            })
        }

        return (admin != null) ? await activationSucceeded(admin) : activationFailed()
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message })
    }
}