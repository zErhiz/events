import { Request, Response, NextFunction } from 'express';
import userService from '../../services/user';

async function SignIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const { user, token } = await userService.signInUser(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
}

export default SignIn;