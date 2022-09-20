import { Router } from 'express';

import { getTopics, getTopicById, createTopic, updateTopicById, deleteTopicById } from './topics.controller';

const router = Router();

router.route('/').get(getTopics);
router.route('/:id').get(getTopicById);
router.route('/').post(createTopic);
router.route('/:id').patch(updateTopicById);
router.route('/:id').delete(deleteTopicById);

export { router as topicsRoutes };
