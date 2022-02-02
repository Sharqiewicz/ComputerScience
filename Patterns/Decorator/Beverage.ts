import { IBeverage } from './types'

export abstract class Beverage implements IBeverage {
  private _description: string = 'No description'

  get description() {
    return this._description
  }
  set description(value: string) {
    this._description = value
  }

  abstract cost(): number
}
