import { Request, Response, NextFunction } from 'express';
import placeService from '../../services/place';

async function getById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const place = await placeService.getById(id);
    res.status(200).json(place);
  } catch (error) {
    next(error);
  }
}
export default getById;