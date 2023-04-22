import { Request, RequestHandler, Response } from "express";

export default class UserController {
  createUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  signIn: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };
}
