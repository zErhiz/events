import { Request, Response, NextFunction } from 'express';
import qualificationService from '../../services/qualification';

async function upsert(req: Request, res: Response, next: NextFunction) {
    const qualificationData = req.body;
  try {
    const qualification = await qualificationService.upsertQualification(qualificationData);
    res.status(200).json(qualification);
  } catch (error) {
    next(error);
  }
}

export default upsert