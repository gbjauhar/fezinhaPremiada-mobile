import {flow, types} from 'mobx-state-tree';

import {IUserSnapshotOut, UserModel} from './user';
import {nullOrUndefined} from './helpers/nullOrUndefined';
import {database} from '../database/index.native';
import {isAfter} from 'date-fns';
import {api} from '@services/api';
import {WithdrawStore} from './withdraw';
import {CartStore} from './cart';
import {EnvironmentModel} from './environment';
import {ENV} from '../env';

interface RockoningDto {
  value: number;
  credit: number;
}

export const RootStoreModel = types
  .model({
    user: nullOrUndefined(UserModel),
    cartStore: CartStore,
    token: nullOrUndefined(types.string),
    withdrawStore: WithdrawStore,
    payment: nullOrUndefined(types.string),
    isLoading: types.boolean,
    isAppOpened: types.boolean,
    environmentStore: EnvironmentModel,
  })
  .actions(self => ({
    setUser: flow(function* (user: IUserSnapshotOut) {
      self.user = user;
      yield database.adapter.setLocal('user', JSON.stringify(user));
    }),
    handleRockoning: flow(function* ({value, credit}: RockoningDto) {
      if (self.user?.credit && self.user?.value) {
        self.user.credit = credit;
        self.user.value = value;
      }

      yield database.adapter.setLocal('user', JSON.stringify(self.user));
    }),
    setToken(token: string) {
      self.token = token;
      api.defaults.headers.authorization = `Bearer ${token}`;
    },
    setPayment(payment: string) {
      self.payment = payment;
    },
    signOut: flow(function* () {
      self.user = null;
      self.token = null;
      yield database.adapter.removeLocal('user');
      yield database.adapter.removeLocal('expiresIn');
      yield database.adapter.removeLocal('user_id');
      api.defaults.headers.authorization = null;
    }),
    getUser: flow(function* () {
      const userPlain = yield database.adapter.getLocal('user');
      const token = yield database.adapter.getLocal('user_id');

      const expiresIn = yield database.adapter.getLocal('expiresIn');
      const user: IUserSnapshotOut = JSON.parse(userPlain);

      const atualDate = new Date();
      const parseExpiredDate = new Date(JSON.parse(expiresIn));

      api.defaults.headers.authorization = `Bearer ${token}`;

      const isExpired = isAfter(atualDate, new Date(parseExpiredDate));

      if (isExpired) {
        self.user = null;
        yield database.adapter.removeLocal('user');
        yield database.adapter.removeLocal('expiresIn');
        yield database.adapter.removeLocal('user_id');
      } else {
        self.user = user;
      }
    }),
  }))
  .create({
    user: null,
    cartStore: {
      cart: {},
    },
    environmentStore: {
      api_url: String(ENV.BASE_URL),
      api_key: String(ENV.API_KEY),
    },
    token: null,
    withdrawStore: {
      withdraw: null,
    },
    payment: null,
    isLoading: true,
    isAppOpened: true,
  });
