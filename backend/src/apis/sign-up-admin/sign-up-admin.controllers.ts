import { Request, Response } from 'express';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Status} from "../../utils/interfaces/Status";
import {insertAdmin, Admin } from "../../utils/models/Admin";


export async function signUpAdminController (request: Request, response: Response): Promise<Response | undefined> {
    try {

        const mailGun = new Mailgun(formData)
        const mailGunClient = mailGun.client({username:'api', key:process.env.MAILGUN_API_KEY as string})
        const { adminName, adminPhone, adminEmail, adminPassword, adminPasswordConfirm } = request.body
        const adminHash = await setHash(adminPassword)
        const adminActivationToken = setActivationToken()
        const basePath: string = `${request.protocol}://${request.hostname}/${request.originalUrl}/activation/${adminActivationToken}`
        const message = `<h2>Welcome to Test Log In Project</h2>
    <p>Please confirm your email address before continuing </p>
    <p><a href="${basePath}">${basePath}</a></p>
`
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: adminEmail,
            subject: 'One step closer to Successful Sign Up -- Account Activation',
            html: message
        }

        const admin: Admin = { adminId: null, adminName, adminPhone, adminEmail, adminHash, adminActivationToken }

        await insertAdmin(admin)
        console.log("Inserted Admin")
        await mailGunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)
        console.log("Sent Via Mailgun")

        const status: Status = {
            status: 200,
            message: 'Account successfully created please check your email.',
            data: null
        }

        return response.json(status)
    } catch (error: any) {
        if (error.message === "Forbidden") {
            const status: Status = {
                status: 200,
                message: 'Account successfully created.',
                data: null
            }

            return response.json(status)
        }
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        }

        return response.json(status)
    }
}