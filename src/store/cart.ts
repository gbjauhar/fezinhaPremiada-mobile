import {Instance, SnapshotIn, SnapshotOut, flow, types} from 'mobx-state-tree';
import {
  createCart,
  deleteAll,
  deleteOne,
  getOne,
  getOneBySelectedId,
  showCart,
} from '@services/localQueries';
import {SetCartDto} from '@screens/Titles/hooks/useTitles';
import Cart from 'src/database/model/Cart';

export const CartModel = types.model({
  id: types.identifier,
  name: types.string,
  selected_id: types.string,
  price: types.string,
  chances: types.string,
});

export interface ICartStore extends Instance<typeof CartStore> {}

export const CartStore = types
  .model({
    cart: types.map(CartModel),
  })
  .views(self => ({
    get cartList() {
      return Array.from(self.cart.values());
    },
    get totalCartValue() {
      return Array.from(self.cart.values()).reduce(
        (acc, newValue) => acc + Number(newValue.price),
        0,
      );
    },
  }))
  .actions(self => ({
    addToCart: flow(function* (cart: SetCartDto) {
      const cartArray = Array.from(self.cart.values());
      const hasInCart = cartArray.some(
        cartItem => cartItem.selected_id === cart.id,
      );
      const itemCart = yield getOneBySelectedId(cart.id);

      if (hasInCart || itemCart) {
        return null;
      }

      const create = yield createCart(
        cart.id,
        cart.name,
        cart.price,
        cart.chances,
      );

      self.cart.set(create.id, {
        id: create.id,
        selected_id: create.selected_id,
        name: create.name,
        price: create.price,
        chances: create.chances,
      });
    }),
    getCart: flow(function* () {
      if (self.cart.size > 0) {
        return;
      }

      const cart: Cart[] = yield showCart();
      cart.forEach(item => {
        self.cart.set(item.id, {
          chances: item.chances,
          id: item.id,
          name: item.name,
          price: item.price,
          selected_id: item.selected_id,
        });
      });
    }),
    deleteItem: flow(function* (id: string) {
      const itemCart = yield getOne(id);

      if (itemCart) {
        yield deleteOne(itemCart);
      }

      return self.cart.delete(id);
    }),
    deleteAll: flow(function* () {
      yield deleteAll();
      return self.cart.clear();
    }),
  }));

export interface ICartl extends Instance<typeof CartModel> {}
export interface ICartSnapshotIn extends SnapshotIn<typeof CartModel> {} // => { name?: string }
export interface ICartSnapshotOut extends SnapshotOut<typeof CartModel> {} // => { name: string }
