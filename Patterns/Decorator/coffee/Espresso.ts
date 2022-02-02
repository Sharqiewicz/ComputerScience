import { Beverage } from '../Beverage'
import { Size } from '../types'
import { EspressoPrice } from '../prices'

export class Espresso extends Beverage {
  constructor(size: Size) {
    super()
    this.description = 'Espresso'
    this.size = size
  }

  cost() {
    return EspressoPrice[this.size]
  }
}
