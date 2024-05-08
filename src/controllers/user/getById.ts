import { Request, Response, NextFunction } from 'express';
import userService from '../../services/user';
async function getById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const user = await userService.getById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}   
export default getById;