export type Cover = 'HARDCOVER' | 'SOFTCOVER'

export interface Book {
  name: string
  author: string
  language: string
  cover: Cover
}

interface PackedBook extends Book{
    isPacked: boolean
    isReadyToSend: boolean
    isSend: boolean
}

export abstract class BookStore {
  book: PackedBook
  abstract createOrder: () => void
  prepareOrder() {
    this.book.isPacked = true
    this.book.isReadyToSend = true
    return this.book
  }
  sendOrder(){
      this.book.isSend = true
      return this.book
  }
}


