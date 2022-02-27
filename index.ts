// import { main } from './Patterns/Decorator'
// main()

//import { main } from './compilePlayground'

import { main } from './Patterns/Command'

main()

type PaymentMethods = 'card' | 'psc'

type PaymentMethodsObject = {
  [P in PaymentMethods]: boolean
}

type RRecord<T extends string | number | symbol, K> = {
  [P in T]: K
}

type aA = RRecord<'aa' | 'bb', boolean>
type aAA = Record<'aa' | 'bb', boolean>


type PPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

