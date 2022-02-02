export interface IBeverage {
  description: string
  cost: () => number
  size: Size
}

export enum ESize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export type Size = keyof typeof ESize

export type PriceList = {
  [ESize.SMALL]: number
  [ESize.MEDIUM]: number
  [ESize.LARGE]: number
}
