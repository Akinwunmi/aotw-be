import chalk from 'chalk';
import { createPool, Pool } from 'mysql2';

import { DATA_SOURCES } from '../../config/variables.config';

const DATA_SOURCE = DATA_SOURCES.mySqlDataSource;

let POOL: Pool;

export const init = () => {
  try {
    POOL = createPool({
      connectionLimit: DATA_SOURCE.DB_CONNECTION_LIMIT,
      host: DATA_SOURCE.DB_HOST,
      user: DATA_SOURCE.DB_USER,
      password: DATA_SOURCE.DB_PASSWORD,
      database: DATA_SOURCE.DB_DATABASE,
    });

    console.debug(chalk.greenBright('\nMySQL Adapter Pool generated successfully.'));
  } catch (error) {
    console.error('[mysql.connector][init][Error]:', error);
    throw new Error('Failed to initialize pool.');
  }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  try {
    if (!POOL) {
      throw new Error('No pool created, ensure it is created when running the app.');
    }

    return new Promise<T>((resolve, reject) => {
      POOL.query(query, params, (error, results) => {
        error ? reject(error) : resolve(results as T);
      });
    });
  } catch (error) {
    console.error('[mysql.connector][execute][Error]:', error);
    throw new Error('Failed to execute MySQL query.');
  }
}
