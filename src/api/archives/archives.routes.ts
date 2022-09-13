import { Router } from 'express';

import {
  createArchive,
  deleteArchiveById,
  getArchives,
  getArchiveById,
  updateArchiveById
} from './archives.controller';
import * as Auth from '../middleware/auth.middleware';

const router = Router();

router.route('/').get(Auth.authorize(['getArchives']), getArchives);
router.route('/:id').get(Auth.authorize(['getArchives']), getArchiveById);
router.route('/').post(Auth.authorize(['createArchives']), createArchive);
router.route('/:id').patch(Auth.authorize(['updateArchives']), updateArchiveById);
router.route('/:id').delete(deleteArchiveById);

export { router as archivesRoutes };
