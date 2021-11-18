// extending an Array will provide the array methods to the interface type e.g. .length, splice, etc
export interface Card extends Array<any>  {
    [index: number]: number;
  }
export interface Deck extends Array<any> {
    [index: number]: Card | [];
  }