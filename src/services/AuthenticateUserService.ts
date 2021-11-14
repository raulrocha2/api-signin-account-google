import prismaClient from "../prisma/intex";
//Google OAuth
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = 'YOUR_GOOGLE_ID.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

interface IUserResponse {
  sub: number,
  name: string,
  email: string,
  picture: string
}

class AuthenticateUserSercice {

  async execute(token: string) {

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub, name, email, picture } = payload;

    console.log(email);

    let user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          sub,
          name,
          email,
          picture,
        }
      })
    }

    return { user, token }

  }



}

export { AuthenticateUserSercice }