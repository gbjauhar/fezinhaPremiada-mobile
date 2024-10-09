import {Instance, SnapshotIn, SnapshotOut, types} from 'mobx-state-tree';
import {nullOrUndefined} from './helpers/nullOrUndefined';

export const UserModel = types.model({
  id: types.identifier,
  name: types.string,
  email: types.string,
  cel: types.string,
  value: types.number,
  credit: types.number,
  credit_limit: types.number,
  doccument: types.maybeNull(types.string),
  associated_to: nullOrUndefined(types.string),
  code: types.maybeNull(types.string),
  created_at: types.string,
  updated_at: types.string,
});

export interface IUser extends Instance<typeof UserModel> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof UserModel> {} // => { name?: string }
export interface IUserSnapshotOut extends SnapshotOut<typeof UserModel> {} // => { name: string }
