import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    // middleware validation over email and password
    body("email").isEmail().withMessage("Please provide valid Email!"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 to 20 characters!"),
  ],
  (req: Request, res: Response) => {

    const errors  =  validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).send(errors.array());
    }

    res.send("Hi, there! Signup");
  }
);

export { router as signupRouter };
