import { Request, Response, NextFunction } from 'express';
import userService from '../../services/user';

async function Upsert(req: Request, res: Response, next: NextFunction) {
    const userData = req.body;
  
    try {
      const user = await userService.upsertUser(userData);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  
export default Upsert;