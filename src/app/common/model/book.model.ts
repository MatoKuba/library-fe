export interface Book {
  id: number;
  name: string;
  author: string;
  available: boolean;
}


export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS'
}
