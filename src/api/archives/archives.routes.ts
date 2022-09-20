import { Router } from 'express';

import * as Auth from '../middleware/auth.middleware';
import {
  createArchive,
  deleteArchiveById,
  getArchives,
  getArchiveById,
  updateArchiveById
} from './archives.controller';

const router = Router();

const withAuth = false;

if (withAuth) {
  router.route('/').get(Auth.authorize(['getArchives']), getArchives);
  router.route('/:id').get(Auth.authorize(['getArchives']), getArchiveById);
  router.route('/').post(Auth.authorize(['createArchives']), createArchive);
  router.route('/:id').patch(Auth.authorize(['updateArchives']), updateArchiveById);
  router.route('/:id').delete(Auth.authorize(['deleteArchives']), deleteArchiveById);
} else {
  router.route('/').get(getArchives);
  router.route('/:id').get(getArchiveById);
  router.route('/').post(createArchive);
  router.route('/:id').patch(updateArchiveById);
  router.route('/:id').delete(deleteArchiveById);
}

export { router as archivesRoutes };
