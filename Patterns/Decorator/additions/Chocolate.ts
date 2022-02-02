import { BeverageDecorator } from '../BeverageDecorator'
import { IBeverage } from '../types'

const CHOCOLATE_PRICE = 2

export class Chocolate extends BeverageDecorator {
  beverage: IBeverage
  constructor(beverage: IBeverage) {
    super()
    this.beverage = beverage
  }
  get description(): string {
    return this.beverage.description + ', Chocolate'
  }
  cost(): number {
    return this.beverage.cost() + CHOCOLATE_PRICE
  }
}
