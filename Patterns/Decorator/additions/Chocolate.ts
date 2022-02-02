import { BeverageDecorator } from '../BeverageDecorator'
import { IBeverage } from '../types'

const CHOCOLATE_PRICE = 2

export class Chocolate extends BeverageDecorator {
  beverage: IBeverage
  description: string

  constructor(beverage: IBeverage) {
    super()
    this.beverage = beverage
    this.description = this.beverage.description + ', Chocolate'
    this.size = this.beverage.size
  }

  cost(): number {
    return this.beverage.cost() + CHOCOLATE_PRICE
  }
}
