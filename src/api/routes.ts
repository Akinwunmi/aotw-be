import { Router } from 'express';

import { archivesRoutes } from './archives/archives.routes';

const router = Router();
router.use('/archives', archivesRoutes);

export default router;
