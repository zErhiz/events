import { Request, Response, NextFunction } from 'express';
import Event from '../models/event';

async function checkEventDate(req: Request, res: Response, next: NextFunction) {
    try {
        const eventId = req.body.eventId; 
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ error: 'event not found' });
        }

        const currentDate = new Date();
        if (currentDate > event.date) {
          
            next();
        } else {
       
            return res.status(403).json({ error: 'you cannot comment this event' });
        }
    } catch (error) {
        console.error('Error in middleware date:', error);
        return res.status(500).json({ error: 'error in the server' });
    }
}

export default checkEventDate;