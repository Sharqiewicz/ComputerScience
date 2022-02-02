import { Beverage } from '../Beverage'

const ESPRESSO_PRICE = 8

export class Espresso extends Beverage {
  constructor() {
    super()
    this.description = 'Espresso'
  }

  cost() {
    return ESPRESSO_PRICE
  }
}
