import { Request, Response, NextFunction } from 'express';

import { validateToken } from '../utils/jwt.utils';

export const authorize = (allowedAccessTypes: string[]) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    let jwt = req.headers.authorization;

    if (!jwt) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if (jwt.toLowerCase().startsWith('bearer')) {
      jwt = jwt.slice('bearer'.length).trim();
    }

    // Verify if token has not expired yet
    const decodedToken = await validateToken(jwt);

    const hasAccessToEndpoint = allowedAccessTypes.some(
      aat => decodedToken.accessTypes.some(at => at === aat)
    );

    if (!hasAccessToEndpoint) {
      return res.status(401).json({ message: 'No permission to access endpoint' });
    }

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Expired token' });
      return;
    }

    res.status(500).json({ message: 'Failed to authenticate user' });
  }
};