import { atom } from 'jotai'
import { Product } from '../types/product';

export const categoryAtom = atom<string | undefined>(undefined);
export const cartItemsAtom= atom<Product[]>([]); 