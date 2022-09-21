import { execute } from '../utils/mysql.connector';

import { ARCHIVE_QUERIES } from './archives.queries';
import { Archive } from './archives.model';

export const getArchives = async () => {
  return execute<Archive[]>(ARCHIVE_QUERIES.GetArchives, []);
};

export const getArchiveById = async (id: Archive['id']) => {
  return execute<Archive>(ARCHIVE_QUERIES.GetArchiveById, [ id ]);
};

export const createArchive = async ({ name, mainTopicsType }: Archive) => {
  const result = await execute<{ affectedRows: number }>(
    ARCHIVE_QUERIES.CreateArchive,
    [ name, mainTopicsType ]
  );
  return result.affectedRows > 0;
};

export const updateArchiveById = async ({ id, name, mainTopicsType }: Archive) => {
  const result = await execute<{ affectedRows: number }>(
    ARCHIVE_QUERIES.UpdateArchiveById,
    [ name, mainTopicsType, id ]
  );
  return result.affectedRows > 0;
};

 export const deleteArchiveById = async (id: Archive['id']) => {
  const result = await execute<{ affectedRows: number }>(
    ARCHIVE_QUERIES.DeleteArchiveById,
    [ id ]
  );
  return result.affectedRows > 0;
};
