// Email Check middelwere
import { configurationEmal } from "./nodemail.middlewere";

export async function checkEmail(userEmail: string, useToken: string) {
  const transporter = await configurationEmal();
  const mailOptions = {
    from: '"Nombre del Remitente" <>', // dirección del remitente,
    to: userEmail,
    subject: " Check Email ",
    text: "Hola mundo!",
    html: `<b>Hola mundo!</b> <a href='http://localhost:4000/auth/em?${userEmail}/tk?${useToken}'>clck</a>`,
  };
  return transporter.sendMail(mailOptions);
}
// send Email
class sendEmail {
  // constructor
  constructor() {}
  // public
  public transporter = configurationEmal();

  // private
  private checkEmail() {}
  private checkDeletePass() {}
  private checkUpdateEmail(userEmail: string, useToken: string) {
    return new Promise((Resolve, Reject) => {
      try {
        const mailOptions = {
          from: '"Nombre del Remitente" <>', // dirección del remitente,
          to: userEmail,
          subject: " Check Email ",
          text: "Hola mundo!",
          html: `<b>Hola mundo!</b> <a href='http://localhost:4000/auth/em?${userEmail}/tk?${useToken}'>clck</a>`,
        };
      } catch (error) {
        Reject(error);
      }
    });
  }
}
