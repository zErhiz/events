import { Request, Response, NextFunction } from 'express';
import placeService from '../../services/place';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const places = await placeService.getAll();
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
}

export default getAll;