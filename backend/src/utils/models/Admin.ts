import { sql } from '../database.utils'

export interface Admin {
    adminId: string|null,
    adminName: string,
    adminPhone: string,
    adminEmail: string,
    adminHash: string,
    adminActivationToken: string|null

}

export interface PartialAdmin {
    adminId: string|null,
    adminName: string,
    adminPhone: string,
    adminEmail: string,
}


export async function insertAdmin (admin: Admin): Promise<string> {
    const { adminName, adminPhone, adminEmail, adminHash,adminActivationToken } = admin
    await sql`INSERT INTO admin (admin_id, admin_name, admin_phone, admin_email, admin_hash, admin_activation_token) VALUES(gen_random_uuid(), ${adminName}, ${adminPhone}, ${adminEmail}, ${adminHash}, ${adminActivationToken})`
    return 'Admin successfully created'
}

export async function updateAdmin (admin: PartialAdmin): Promise<string> {
    const { adminName, adminPhone, adminEmail, adminId } = admin
    await sql`UPDATE admin SET admin_name = ${adminName}, admin_email = ${adminEmail}, admin_phone = ${adminPhone} WHERE admin_id = ${adminId}`
    return 'Admin updated successfully'
}

export async function selectPartialAdminByAdminId (adminId: string): Promise<PartialAdmin|null> {
    const result = await sql<Admin[]>`SELECT admin_id, admin_phone, admin_email, admin_name from admin WHERE admin_id = ${adminId}`
    return result?.length === 1 ? result[0] : null
}


export async function selectAdminByAdminEmail (adminEmail: string): Promise<Admin|null> {
    const result = await sql <Admin[]>`SELECT admin_id, admin_phone, admin_email, admin_hash, admin_name from admin WHERE admin_email = ${adminEmail}`
    return result?.length === 1 ? result[0] : null
}

export async function selectAdminByAdminActivationToken (adminActivationToken: string): Promise<Admin|null> {
    const result = await sql<Admin[]>`SELECT admin_id, admin_phone, admin_email, admin_name from admin WHERE admin_activation_token = ${adminActivationToken}`
    return result?.length === 1 ? result[0] : null
}