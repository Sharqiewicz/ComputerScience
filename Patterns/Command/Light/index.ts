import { Command } from '../Command'

type ILightTurnOn = {
  turnOn: () => void
}

class LightTurnOn implements Command {
  private light: ILightTurnOn
  constructor(light: ILightTurnOn) {
    this.light = light
  }
  execute() {
    this.light.turnOn()
  }
}

export { LightTurnOn, ILightTurnOn }
