import { Schema } from 'express-validator'

export const signUpAdminValidator: Schema = {
    adminPhone: {
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }

        },
        isLength: {
            errorMessage: 'Phone number must be between one and thirty two characters',
            options: { min: 1, max: 32 }
        }
    },
    adminEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
    },
    adminPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8, max: 200 }
        }

    },
    adminPasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8, max: 200 }
        },
        custom: {
            errorMessage: 'Password confirmation does not match password',
            options: (value, { req, location, path }) => {
                if (value !== req.body.adminPassword) {
                    throw new Error('Password confirmation does not match password')
                }

                // Indicates the success of this synchronous custom validator
                return true
            }
        }
    },
    adminName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Name must be between one and sixty four characters',
            options: { min: 1, max: 64 }
        }
    }
}