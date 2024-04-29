import { Request, Response, NextFunction } from 'express';

interface User {
    role: string;
}

function isOrganizer(req: Request, res: Response, next: NextFunction) {
        const userRole = (req.user as User)?.role;
    
        if (userRole !== 'organizer' && userRole !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Only organizers can access this path.' });
        }
    
        next();
}
    
export default isOrganizer;
