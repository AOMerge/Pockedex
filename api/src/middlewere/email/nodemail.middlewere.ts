// Date: 19/12/2023
// nodemail.middlewere.ts
// library
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// .env
const USER_EMAIL = process.env.USER_EMAIL || "";
const USER_PASSWORD_EMAIL = process.env.USER_PASSWORD_EMAIL || "";
const USER_HOST_EMAIL = process.env.USER_HOST_EMAIL || "";
const USER_PORT_EMAIL = process.env.USER_PORT_EMAIL || "";

/**
 * Configures an SMTP transporter for sending emails.
 * @returns {Promise<nodemailer.Transporter>} The configured transporter.
 */
export async function configurationEmal() {
    // Configura un transportador SMTP
    return nodemailer.createTransport({
        host: USER_HOST_EMAIL, // Reemplaza con tu servidor SMTP
        port: USER_PORT_EMAIL,
        secure: false, // true para 465, false para otros puertos
        auth: {
        user: USER_EMAIL, // tu cuenta de email
        pass: USER_PASSWORD_EMAIL, // tu contraseña de email
        },
    } as nodemailer.TransportOptions); // Specify the correct type for the createTransport function call
}
