import { Customer } from './customer';
import { Product } from './product';

export interface Sale {
  id: number
  total: number
  date_time: Date
  customer: Customer
  products: Product[]
}
