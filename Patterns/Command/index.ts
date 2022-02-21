import { LightTurnOn } from './Light'
import { RemoteControl } from './RemoteControl'

function main(): void {
  const lightTurnOn = new LightTurnOn({
    turnOn: () => {
      console.log('turn on')
    },
  })

  const remoteControl = new RemoteControl()

  remoteControl.setItemToSlot(1, lightTurnOn)

  remoteControl.execute(1)
}

export { main }
