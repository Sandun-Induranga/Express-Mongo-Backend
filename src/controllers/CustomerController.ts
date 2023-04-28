import { Request, RequestHandler, Response } from "express";

export default class CustomerController {
  createPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  retriveAllCustomers: RequestHandler = async (
    req: Request,
    res,
    Response
  ): Promise<Response> => {
    return res;
  };

  updateCustomer: RequestHandler = async (
    req: Request,
    res,
    Response
  ): Promise<Response> => {
    return res;
  };

  deleteCustomer: RequestHandler = async (
    req: Request,
    res,
    Response
  ): Promise<Response> => {
    return res;
  };
}
