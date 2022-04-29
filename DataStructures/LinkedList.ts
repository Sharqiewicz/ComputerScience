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

  add(value: any): LinkedList {
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

    return this
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

  static fusion(listA: LinkedList, listB: LinkedList) {
    let listC = new LinkedList()
    return sort(listA.head, listB.head, listC)
  }
}

function sort(a: LinkedNode, b: LinkedNode, list: LinkedList): LinkedList {
  if (a === null) {
    list.add(b.value)
    return list
  }
  if (b === null) {
    list.add(a.value)
    return list
  }
  if (a.value <= b.value) {
    list.add(a.value)
    return sort(a.next, b, list)
  }
  if (b.value <= a.value) {
    list.add(b.value)
    return sort(a, b.next, list)
  }
}

const list1 = new LinkedList().add(1).add(4).add(6)
const list2 = new LinkedList().add(2).add(3).add(7)

LinkedList.fusion(list1, list2)
