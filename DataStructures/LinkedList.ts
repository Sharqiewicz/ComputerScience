export interface node {
  value: any
  next: node | undefined
}

export class LinkedNode implements node {
  value: any
  next: node | undefined
  constructor(value: any, next: node | undefined) {
    this.value = value
    this.next = next
  }
}

export class LinkedList {
  private head: node | undefined
  private tail: node | undefined
  private length: number = 0
  private iterator: node | undefined

  add(value: any): void {
    const newNode = new LinkedNode(value, undefined)
    if (this.length && this.tail) {
      const lastNode = this.tail
      lastNode.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    ++this.length
  }

  print(): void {
    this.iterator = this.head

    for (let i = 0; i < this.length; i++) {
      console.log(this.iterator)
      this.iterator = this.iterator!.next
    }
    this.iterator = this.head
  }
}
