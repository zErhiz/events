import { Request, Response, NextFunction } from 'express';

interface User {
    role: string;
}

function isAdmin(req: Request, res: Response, next: NextFunction) {
        const userRole = (req.user as User)?.role;
    
        if (!userRole || userRole !== 'admin') { 
            return res.status(403).json({ message: 'Access denied. Only administrators can access this path.' });
        }
    
        next();
}
    
export default isAdmin;
