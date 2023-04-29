import { Request, RequestHandler, Response } from "express";
import { Customer } from "../models/Customer";

export default class CustomerController {
  createCustoemr: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let customer = new Customer(req.body);

      let exists = await Customer.findOne({ name: customer.name });

      if (!exists) {
        let newCustomer = await customer.save();
        return res.status(200).json({
          message: "Successfully Added..!",
          responseData: newCustomer,
        });
      }
      return res
        .status(200)
        .json({ message: "Already Exits..!", responseData: customer });
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };

  retriveAllCustomers: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let customers = await Customer.find();
      return res
        .status(200)
        .json({ message: "Successfully Added..!", responseData: customers });
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };

  updateCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const { id } = req.params;
    try {
      let customer = new Customer(req.body);
      let updatedCustomer = await Customer.findByIdAndUpdate(id, customer);
      return res.status(200).json({
        message: "Successfully Added..!",
        responseData: updatedCustomer,
      });
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };

  deleteCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleted = await Customer.findByIdAndDelete(id);
      if (!deleted) throw new Error("Something Went Wrong..!");

      return res
        .status(200)
        .json({ message: "Successfully Added..!", responseData: true });
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };
}
