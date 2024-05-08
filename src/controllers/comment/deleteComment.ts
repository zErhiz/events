import { Request, Response, NextFunction } from 'express';
import commentService from '../../services/comment';

async function deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
  try {
    const comments = await commentService.deleteComment(id);
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
}

export default deleteById;