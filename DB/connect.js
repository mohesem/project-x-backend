import { Database } from 'arangojs';
import debug from 'debug';

import createCollections from './createCollections';

const log = debug('DB:connect');

// // TODO: add db variables to webpack as enviormental variables
const dbConfig = {
  host: 'localhost',
  port: '8529',
  username: 'projectX',
  password: 'projectX',
  database: 'projectX',
};

const db = new Database({
  url: `http://${dbConfig.host}:${dbConfig.port}`,
});
db.useBasicAuth(dbConfig.username, dbConfig.password);
db.useDatabase(dbConfig.database);

// NOTE: creating databases if dont exist
createCollections(db);

export default db;
