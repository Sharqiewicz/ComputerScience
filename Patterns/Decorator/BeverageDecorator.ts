import { Beverage } from './Beverage'

export abstract class BeverageDecorator extends Beverage {
  abstract get description(): string
}
