import { Request, Response, NextFunction } from 'express';
import placeService from '../../services/place';

async function upsert(req: Request, res: Response, next: NextFunction) {
  const placeData = req.body;

  try {
    const place = await placeService.upsertPlace(placeData);
    res.status(200).json(place);
  } catch (error) {
    next(error);
  }
}
  
export default upsert;