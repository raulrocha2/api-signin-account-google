import { Request, response, Response } from "express";
import { AuthenticateUserSercice } from "../services/AuthenticateUserService";

class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { token } = req.body;

    const service = new AuthenticateUserSercice();

    try {

      const result = await service.execute(token);
      return res.json(result);

    } catch (err) {
      return res.json({ Error: err })
    }
  }
}

export { AuthenticateUserController };