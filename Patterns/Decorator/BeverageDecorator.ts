import { Beverage } from './Beverage'
import { IBeverage } from './types'
export abstract class BeverageDecorator extends Beverage {
  beverage: IBeverage
}
