import { Request, Response, NextFunction } from 'express';
import commentService from '../../services/comment';

async function upsert(req: Request, res: Response, next: NextFunction) {
    const commentData = req.body;
  try {
    const comment = await commentService.upsertComment(commentData);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
}

export default upsert;