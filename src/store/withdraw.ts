import {Instance, SnapshotIn, SnapshotOut, types} from 'mobx-state-tree';
import {nullOrUndefined} from './helpers/nullOrUndefined';

const WithdrawModel = types.model({
  value: types.number,
  pix: nullOrUndefined(types.string),
});

export const WithdrawStore = types
  .model({
    withdraw: nullOrUndefined(WithdrawModel),
  })
  .actions(self => ({
    setWithdraw: (withdraw: IWithdrawSnapshotOut) => {
      self.withdraw = withdraw;
    },
    clearWithdraw: () => {
      self.withdraw = null;
    },
    changeWithdrawValue: (value: number) => {
      self.withdraw = {
        value,
        pix: self.withdraw?.pix,
      };
    },
    changeWithdrawPIX: (pix: string) => {
      self.withdraw = {
        pix,
        value: self.withdraw?.value ?? 0,
      };
    },
  }));

export interface IWithdraw extends Instance<typeof WithdrawModel> {}
export interface IWithdrawSnapshotIn extends SnapshotIn<typeof WithdrawModel> {} // => { name?: string }
export interface IWithdrawSnapshotOut
  extends SnapshotOut<typeof WithdrawModel> {} // => { name: string }
