import { Espresso } from './coffee'
import { WhippedCream, Chocolate } from './additions'

export function main(): void {
  const mySweetCoffee = new Espresso()
  console.log(mySweetCoffee)

  const mySweetCoffeeWithChocolate = new Chocolate(mySweetCoffee)
  console.log(mySweetCoffeeWithChocolate)

  const myPersonalizedCoffee = new WhippedCream(new Chocolate(new Espresso()))
  console.log('myPersonalizedCoffee')
  console.log(myPersonalizedCoffee)
  console.log(myPersonalizedCoffee.description)
}
