import { Espresso } from './coffee'
import { WhippedCream, Chocolate } from './additions'
import { ESize } from './types'

export function main(): void {
  const mySweetCoffee = new Espresso(ESize.SMALL)
  console.log(mySweetCoffee)

  const mySweetCoffeeWithChocolate = new Chocolate(mySweetCoffee)
  console.log(mySweetCoffeeWithChocolate)

  const myPersonalizedCoffee = new WhippedCream(new Chocolate(new Espresso(ESize.LARGE)))

  console.log('myPersonalizedCoffee')
  console.log(myPersonalizedCoffee)

  console.log('myPersonalizedCoffee.description')
  console.log(myPersonalizedCoffee.description)

  console.log('myPersonalizedCoffee.cost()')
  console.log(myPersonalizedCoffee.cost())
}
