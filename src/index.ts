import bodyParser from 'body-parser';
import chalk from 'chalk';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import path from 'path';

import errorHandler from './api/middleware/error-handler.middleware';
import logger from './api/middleware/logger.middleware';
import routes from './api/routes';
import { generateToken } from './api/utils/jwt.utils'
import * as MySQLConnector from './api/utils/mysql.connector';

const app = express();
const port = 3000;

// AOTW Logo for terminal
console.log(
  chalk.blueBright('  _   __ ____ _  _  __\n / \\ /  \\  \\  \\  |  /\n/---\\\\__/   \\  \\/ \\/')
);

// * DEV only
if (process.env.NODE_ENV !== 'production') {
  console.log(`\nJWT Token: ${chalk.grey(generateToken())}`);
}

// Create MySQL database pool
MySQLConnector.init();

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Parse request body and append
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Compress all responses
app.use(compression());
// Enable all CORS requests
app.use(cors());
// Security
app.use(helmet());
// Logging
app.use(logger);

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}\n`)
});
