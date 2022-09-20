export const TOPIC_QUERIES = {
  GetTopics: `
    SELECT id, name, archiveId, topicId
    FROM topics
  `,
  GetTopicById: `
    SELECT id, name, archiveId, topicId
    FROM topics
    WHERE id = ?
  `,
  CreateTopic: `
    INSERT INTO topics (name, type, archiveId, topicId)
      VALUES (?, ?, ?, ?);
  `,
  UpdateTopicById: `
    UPDATE topics
    SET name = ?, type = ?, archiveId = ?, topicId = ?
    WHERE id = ?
  `,
  DeleteTopicById: `
    DELETE FROM topics
    WHERE id = ?
  `
};
