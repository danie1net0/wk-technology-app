import { Address } from './address';

export interface Customer {
  id: number
  name: string
  cpf: string
  email: string
  birth_date: string
  address: Address
}
