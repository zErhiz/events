import { Request, Response, NextFunction } from 'express';
import eventService from '../../services/event';

async function register(req: Request, res: Response, next: NextFunction) {
  const { userId, eventId } = req.body;

  try {
    const event = await eventService.registerToEvent(userId, eventId);
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
}

export default register;