import { Request, RequestHandler, Response } from 'express';

import * as TopicService from './topics.service';

export const getTopics: RequestHandler = async (req: Request, res: Response) => {
  try {
    const topics = await TopicService.getTopics();

    res.status(200).json({
      topics
    });
  } catch (error) {
    console.error('[topics.controller][getTopics][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when fetching topics.'
    });
  }
};

export const getTopicById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const topic = await TopicService.getTopicById(Number(req.params.id));

    res.status(200).json({
      topic
    });
  } catch (error) {
    console.error('[topics.controller][getTopicById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when fetching topic.'
    });
  }
};

export const createTopic: RequestHandler = async (req: Request, res: Response) => {
  try {
    const topic = await TopicService.createTopic(req.body);

    res.status(200).json({
      topic
    });
  } catch (error) {
    console.error('[topics.controller][createTopic][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when creating a new topic.'
    });
  }
};

export const updateTopicById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const topic = await TopicService.updateTopicById({ ...req.body, id: Number(req.params.id) });

    res.status(200).json({
      topic
    });
  } catch (error) {
    console.error('[topics.controller][updateTopicById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when updating the topic.'
    });
  }
};

export const deleteTopicById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const topic = await TopicService.deleteTopicById(Number(req.params.id));

    res.status(200).json({
      topic
    });
  } catch (error) {
    console.error('[topics.controller][deleteTopicById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'An error occured when deleting the topic.'
    });
  }
};
