import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

function logger(req: Request, res: Response, next: NextFunction) {
  const id = uuidv4();

  const now = new Date();
  const timestamp = now.toUTCString();

  const { method, url } = req;
  let statusCodeText: string | number = res.statusCode;
  if (res.statusCode === 200) {
    statusCodeText = chalk.green(res.statusCode);
  }
  if (res.statusCode >= 300 && res.statusCode < 400) {
    statusCodeText = chalk.blue(res.statusCode);
  }
  if (res.statusCode > 400) {
    statusCodeText = chalk.red(res.statusCode);
  }

  const start = process.hrtime();
  res.once('finish', () => {
    const end = process.hrtime(start);
    const duration = `${(end[0] * 1000 + end[1] / 1e6).toFixed(2)}ms`;
    console.log(
      `${chalk.grey(id + ' - ' + timestamp)} ${method}:${url} ${statusCodeText} ${duration}`
    );
  });

  next();
};

export default logger;
