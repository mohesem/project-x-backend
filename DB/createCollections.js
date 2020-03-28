import debug from 'debug';

const log = debug('DB:createCollection');

export default async db => {
  const userCollection = await db.collection('users');
  const resultUser = await userCollection.exists();
  if (!resultUser) {
    userCollection.create().then(
      () => log('user Collection created'),
      err => log('Failed to create collection:', err),
    );
  }

  // log collection
  const logCollection = await db.collection('logs');
  const resultLog = await logCollection.exists();
  if (!resultLog) {
    logCollection.create().then(
      () => log('Log collection created'),
      err => log('Failed to create collection:', err),
    );
  }
};
