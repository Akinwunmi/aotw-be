import { execute } from '../utils/mysql.connector';

import { TOPIC_QUERIES } from './topics.queries';
import { Topic } from './topics.model';

export const getTopics = async () => {
  return execute<Topic[]>(TOPIC_QUERIES.GetTopics, []);
};

export const getTopicById = async (id: Topic['id']) => {
  return execute<Topic>(TOPIC_QUERIES.GetTopicById, [ id ]);
};

export const createTopic = async ({ name, type, archiveId, topicId }: Topic) => {
  const result = await execute<{ affectedRows: number }>(
    TOPIC_QUERIES.CreateTopic,
    [ name, type, archiveId, topicId ]
  );
  return result.affectedRows > 0;
};

export const updateTopicById = async ({ id, name, type, archiveId, topicId }: Topic) => {
  const result = await execute<{ affectedRows: number }>(
    TOPIC_QUERIES.UpdateTopicById,
    [ name, type, archiveId, topicId, id ]
  );
  return result.affectedRows > 0;
};

 export const deleteTopicById = async (id: Topic['id']) => {
  const result = await execute<{ affectedRows: number }>(
    TOPIC_QUERIES.DeleteTopicById,
    [ id ]
  );
  return result.affectedRows > 0;
};
