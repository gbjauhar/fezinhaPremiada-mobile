// model/schema.js
import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 5,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'cel', type: 'string'},
        {name: 'doccument', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'cart',
      columns: [
        {name: 'selected_id', type: 'string'},
        {name: 'price', type: 'string'},
        {name: 'chances', type: 'string'},
        {name: 'name', type: 'string'},
      ],
    }),
  ],
});
