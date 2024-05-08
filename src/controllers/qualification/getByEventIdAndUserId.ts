import { Request, Response, NextFunction } from 'express';
import qualificationService from '../../services/qualification';

async function getByIds(req: Request, res: Response, next: NextFunction) {
    const { eventId, userId  } = req.body;
  try {
    const qualification = await qualificationService.getByUserIdAndEventId(eventId, userId);
    res.status(200).json(qualification);
  } catch (error) {
    next(error);
  }
}

export default getByIds;