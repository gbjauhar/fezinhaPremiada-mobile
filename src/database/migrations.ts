// app/model/migrations.js

import {
  schemaMigrations,
  createTable,
  addColumns,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    {
      // ⚠️ Set this to a number one larger than the current schema version
      toVersion: 5,
      steps: [
        // See "Migrations API" for more details
        createTable({
          name: 'users',
          columns: [
            {name: 'name', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'cel', type: 'string'},
            {name: 'doccument', type: 'string'},
          ],
        }),
        createTable({
          name: 'cart',
          columns: [
            {name: 'selected_id', type: 'string'},
            {name: 'price', type: 'string'},
            {name: 'chances', type: 'string'},
          ],
        }),
        addColumns({
          table: 'cart',
          columns: [{name: 'name', type: 'string'}],
        }),
      ],
    },
  ],
});
