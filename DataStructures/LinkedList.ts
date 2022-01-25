export interface node {
  value: any
  next: node | null
}

export class LinkedNode implements node {
  value: any
  next: node | null
  constructor(value: any, next: node | null) {
    this.value = value
    this.next = next
  }
}

export class LinkedList {
  private head: node | null = null
  private tail: node | null = null
  private length: number = 0
  private iterator: node | null = null

  add(value: any): void {
    const newNode = new LinkedNode(value, null)
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

  search(value: any): node | false {
    let picker = this.head
    while (picker && picker?.next !== null) {
      if (picker && picker?.value.value == value) {
        return picker
      }
      picker = picker.next
    }
    return false
  }
}
