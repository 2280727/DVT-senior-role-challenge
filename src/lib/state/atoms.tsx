import { atom } from 'jotai'

export const categoryAtom = atom<string | undefined>(undefined);
export const cartModal = atom<boolean>(false);