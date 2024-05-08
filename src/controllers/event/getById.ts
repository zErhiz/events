import { Request, Response, NextFunction } from 'express';
import eventService from '../../services/event';

async function getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
  try {
    const event = await eventService.getById(id);
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
}
export default getById;