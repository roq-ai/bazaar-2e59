import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  amount: number;
  product_id?: string;
  buyer_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  buyer_id?: string;
}
