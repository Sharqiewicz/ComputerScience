import { BeverageDecorator } from '../BeverageDecorator'
import { IBeverage } from '../types'

const WHIPPED_CREAM_PRICE = 2.5

export class WhippedCream extends BeverageDecorator {
  beverage: IBeverage
  constructor(beverage: IBeverage) {
    super()
    this.beverage = beverage
  }

  get description(): string {
    return this.beverage.description + ', whipped cream'
  }

  cost(): number {
    return this.beverage.cost() + WHIPPED_CREAM_PRICE
  }
}
