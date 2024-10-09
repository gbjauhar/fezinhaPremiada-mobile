import {Instance, SnapshotIn, SnapshotOut, flow, types} from 'mobx-state-tree';
import {database} from '../database/index.native';
import {api} from '@services/api';
import {ENV} from '../env';

export const EnvironmentModel = types
  .model({
    api_url: types.maybeNull(types.string),
    api_key: types.maybeNull(types.string),
  })
  .actions(self => ({
    setApiUrl: (api_url: string) => {
      self.api_url = api_url;
      api.defaults.baseURL = api_url;
      database.adapter.setLocal('api_url', api_url);
    },
    setApiKey: (api_key: string) => {
      self.api_key = api_key;
      api.defaults.headers.common['api-key'] = api_key;
      api.defaults.headers.common.api_key = api_key;
      database.adapter.setLocal('api_key', api_key);
    },
    setEnvironment: flow(function* (api_url: string, api_key: string) {
      self.api_url = api_url;
      self.api_key = api_key;

      api.defaults.headers.common['api-key'] = api_key;
      api.defaults.headers.common.api_key = api_key;
      api.defaults.baseURL = api_url;

      yield database.adapter.setLocal('api_url', api_url);
      yield database.adapter.setLocal('api_key', api_key);
    }),
    clearEnvironment: () => {
      self.api_url = '';
      self.api_key = '';
    },
    getLocalEnvironment: flow(function* () {
      const api_key = yield database.adapter.getLocal('api_key');
      const api_url = yield database.adapter.getLocal('api_url');

      if (!api_key || !api_url) {
        self.api_key = String(ENV.API_KEY);
        self.api_url = String(ENV.BASE_URL);
      } else {
        self.api_key = api_key;
        self.api_url = api_url;

        api.defaults.headers.common['api-key'] = api_key;
        api.defaults.headers.common.api_key = api_key;
        api.defaults.baseURL = api_url;
      }
    }),
  }));

export interface IEnvironment extends Instance<typeof EnvironmentModel> {}
export interface IEnvironmentSnapshotIn
  extends SnapshotIn<typeof EnvironmentModel> {} // => { name?: string }
export interface IEnvironmentSnapshotOut
  extends SnapshotOut<typeof EnvironmentModel> {} // => { name: string }
