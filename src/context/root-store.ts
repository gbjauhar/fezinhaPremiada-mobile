import {Instance} from 'mobx-state-tree';
import {createContext} from 'react';
import {RootStoreModel} from '../store';

export const RootStoreContext = createContext<null | Instance<
  typeof RootStoreModel
>>(null);
export const StoreProvider = RootStoreContext.Provider;
