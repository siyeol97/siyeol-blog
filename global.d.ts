import type { MongoClient } from 'mongodb';

declare global {
  namespace globalThis {
    // eslint-disable-next-line
    var _mongo: Promise<MongoClient>;
  }
}
