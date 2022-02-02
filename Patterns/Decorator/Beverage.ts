import { IBeverage, Size } from './types'

export abstract class Beverage implements IBeverage {
  description: string = 'No description'
  size: Size

  abstract cost(): number
}
