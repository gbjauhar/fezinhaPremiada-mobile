// model/Post.js
import {Model} from '@nozbe/watermelondb';
import {text} from '@nozbe/watermelondb/decorators';

export default class Cart extends Model {
  static table = 'cart';

  @text('selected_id')
  selected_id: string;

  @text('price')
  price: string;

  @text('chances')
  chances: string;

  @text('name')
  name: string;
}
