import { Request, RequestHandler, Response } from "express";

export default class CustomerController {
  createCustoemr: RequestHandler = async (
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
