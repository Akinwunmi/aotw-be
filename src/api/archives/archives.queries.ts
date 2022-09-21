export const ARCHIVE_QUERIES = {
  GetArchives: `
    SELECT id, name, mainTopicsType
    FROM archives
  `,
  GetArchiveById: `
    SELECT id, name, mainTopicsType
    FROM archives
    WHERE id = ?
  `,
  CreateArchive: `
    INSERT INTO archives (name, mainTopicsType)
      VALUES (?, ?);
  `,
  UpdateArchiveById: `
    UPDATE archives
    SET name = ?, mainTopicsType = ?
    WHERE id = ?
  `,
  DeleteArchiveById: `
    DELETE FROM archives
    WHERE id = ?
  `
};
