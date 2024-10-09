import Cart from '../database/model/Cart';
import {database} from '../database/index.native';
import {Q} from '@nozbe/watermelondb';

export async function createCart(
  id: string,
  name: string,
  price: string,
  chances: string,
) {
  const create = await database.write(async () => {
    const newPost = await database.get<Cart>('cart').create(selected => {
      selected.selected_id = id;
      selected.price = price;
      selected.chances = chances;
      selected.name = name;
    });
    return newPost;
  });

  return create;
}

export async function showCart(): Promise<Cart[]> {
  const cartCollection = await database.collections
    .get<Cart>('cart')
    .query()
    .fetch();
  return cartCollection;
}

export async function deleteOne(item: Cart) {
  const deleteFromDB = await database.write(async () => {
    const removeFromDB = await item.destroyPermanently();
    return removeFromDB;
  });
  return deleteFromDB;
}

export async function getOne(id: string): Promise<Cart | null> {
  try {
    const cart = await database.get<Cart>('cart').find(id);

    if (cart) {
      return cart;
    }

    return null;
  } catch {
    return null;
  }
}

export async function getOneBySelectedId(id: string): Promise<Cart | null> {
  try {
    const cart = await database
      .get<Cart>('cart')
      .query(Q.where('selected_id', Q.eq(id)))
      .fetch();

    if (cart) {
      return cart[0];
    }

    return null;
  } catch {
    return null;
  }
}

export async function deleteAll() {
  const cartCollection = await database.collections
    .get<Cart>('cart')
    .query()
    .fetch();
  const deleteFromDB = await database.write(async () => {
    const removeFromDB = cartCollection.map(
      async row => await row.destroyPermanently(),
    );
    return removeFromDB;
  });
  return deleteFromDB;
}
