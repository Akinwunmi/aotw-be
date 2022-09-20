export const ARCHIVE_QUERIES = {
  GetArchives: `
    SELECT id, name
    FROM archives
  `,
  GetArchiveById: `
    SELECT id, name
    FROM archives
    WHERE id = ?
  `,
  CreateArchive: `
    INSERT INTO archives (name)
      VALUES (?);
  `,
  UpdateArchiveById: `
    UPDATE archives
    SET name = ?
    WHERE id = ?
  `,
  DeleteArchiveById: `
    DELETE FROM archives
    WHERE id = ?
  `
};
