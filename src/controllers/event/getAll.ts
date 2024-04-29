import { Request, Response, NextFunction } from 'express';
import eventService from '../../services/event';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const places = await eventService.getAll();
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
}

export default getAll;