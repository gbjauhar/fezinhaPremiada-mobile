import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {schema} from './schema';

import User from './model/User';
import migrations from './migrations';
import Cart from './model/Cart';

const adapter = new SQLiteAdapter({
  schema: schema,
  migrations: migrations,
});

export const database = new Database({
  adapter,
  modelClasses: [User, Cart],
});
