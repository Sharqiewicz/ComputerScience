// Only classes can be constructable
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean
    delete() {}
  }
}

class Pokemon {}

class Witcher {}

const DeletablePokemon = Deletable(Pokemon)

const pokemon = new DeletablePokemon()
pokemon.deleted

class Battle {
  opponent: InstanceType<typeof DeletablePokemon>
}

const battle = new Battle()
battle.opponent = new DeletablePokemon()
