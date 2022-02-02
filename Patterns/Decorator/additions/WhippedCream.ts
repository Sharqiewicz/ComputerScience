import { BeverageDecorator } from '../BeverageDecorator'
import { IBeverage } from '../types'
import { WhippedCreamPrice } from '../prices'

export class WhippedCream extends BeverageDecorator {
  beverage: IBeverage
  description: string

  constructor(beverage: IBeverage) {
    super()
    this.beverage = beverage
    this.description = this.beverage.description + ', whipped cream'
    this.size = this.beverage.size
  }

  cost(): number {
    return this.beverage.cost() + WhippedCreamPrice[this.beverage.size]
  }
}
