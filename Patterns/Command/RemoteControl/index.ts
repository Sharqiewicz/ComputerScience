import { Command } from '../Command'

class RemoteControl {
  private slots: Command[] = []

  setItemToSlot(slot: number, item: Command): void {
    this.slots[slot] = item
  }

  execute(slot: number) {
    this.slots[slot].execute()
  }
}

export { RemoteControl }
