import { Router } from 'express';

import { archivesRoutes } from './archives/archives.routes';
import { topicsRoutes } from './topics';

const router = Router();
router.use('/archives', archivesRoutes);
router.use('/topics', topicsRoutes);

export default router;
