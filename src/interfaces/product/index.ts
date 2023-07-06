import { BidInterface } from 'interfaces/bid';
import { ManufacturerInterface } from 'interfaces/manufacturer';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  manufacturer_id?: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  manufacturer?: ManufacturerInterface;
  _count?: {
    bid?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  manufacturer_id?: string;
}
