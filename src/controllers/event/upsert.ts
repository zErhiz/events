import { Request, Response, NextFunction } from 'express';
import eventService from '../../services/event';

async function Upsert(req: Request, res: Response, next: NextFunction) {
  const eventData = req.body;

  try {
    const event = await eventService.Upsert(eventData);
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
}

export default Upsert;