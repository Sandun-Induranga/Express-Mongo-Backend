import { Request, RequestHandler, Response } from "express";

export default class OrderController {
  createOrder: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  retriveAllOrders: RequestHandler = async (
    req: Request,
    res,
    Response
  ): Promise<Response> => {
    return res;
  };

  updateOrder: RequestHandler = async (
    req: Request,
    res,
    Response
  ): Promise<Response> => {
    return res;
  };

  deleteOrder: RequestHandler = async (
    req: Request,
    res,
    Response
  ): Promise<Response> => {
    return res;
  };
}
