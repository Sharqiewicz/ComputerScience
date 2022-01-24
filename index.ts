import { LinkedList } from './DataStructures/LinkedList'

function main(): void {
  const mll = new LinkedList()

  mll.add({ value: 'Hello! I am the first element in the LinkedList!!!' })

  mll.print()

  mll.add({ value: 'Hello! I am the second element in the LinkedList!!!' })
  mll.add({ value: 'Hello! I am the third element in the LinkedList!!!' })
  mll.add({ value: 'Hello! I am the fourth element in the LinkedList!!!' })

  mll.print()
}

main()
