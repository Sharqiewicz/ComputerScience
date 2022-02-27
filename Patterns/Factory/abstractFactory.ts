enum Meat {
  CHICKEN = 'CHICKEN',
  VEGE = 'VEGE',
  MUTTON = 'MUTTON',
}

enum KebapType {
  ORZESZKURA = 'ORZESZKURA',
  MODROMOJA = 'MODROMOJA',
  KURAKLASYK = 'KURAKLASYK',
  VEGEKLASYK = 'VEGEKLASYK',
}

interface KebapFactory {
  createMeat: () => Meat
  createNuts: () => boolean
  createMangoSauce: () => boolean
  createSauerKraut: () => boolean
  createDill: () => boolean
}

class Kebap {
  meat: Meat
  nuts?: boolean
  mangoSauce?: boolean
  sauerkraut?: boolean
  dill?: boolean
}

class VegeKebapFactory implements KebapFactory {
  createMeat(): Meat {
    return Meat.VEGE
  }
  createNuts(): boolean {
    return true
  }
  createMangoSauce(): boolean {
    return true
  }
  createDill(): boolean {
    return true
  }
  createSauerKraut(): boolean {
    return true
  }
}

class ChickenKebapFactory implements KebapFactory {
  createMeat(): Meat {
    return Meat.CHICKEN
  }
  createNuts(): boolean {
    return true
  }
  createMangoSauce(): boolean {
    return true
  }
  createDill(): boolean {
    return true
  }
  createSauerKraut(): boolean {
    return true
  }
}

class MuttonKebapFactory implements KebapFactory {
  createMeat(): Meat {
    return Meat.MUTTON
  }
  createNuts(): boolean {
    return true
  }
  createMangoSauce(): boolean {
    return true
  }
  createDill(): boolean {
    return true
  }
  createSauerKraut(): boolean {
    return true
  }
}
class Orzeszkura extends Kebap {
  private factory: KebapFactory

  constructor(factory: KebapFactory) {
    super()
    this.factory = factory
  }

  prepareKebap() {
    this.meat = this.factory.createMeat()
    this.nuts = this.factory.createNuts()
    this.mangoSauce = this.factory.createMangoSauce()
  }
}

class ModroMoja extends Kebap {
  private factory: KebapFactory

  constructor(factory: KebapFactory) {
    super()
    this.factory = factory
  }

  prepareKebap() {
    this.meat = this.factory.createMeat()
    this.sauerkraut = this.factory.createSauerKraut()
  }
}

class KuraWarzyw {
  private factory: KebapFactory

  constructor(kebapFactory: KebapFactory) {
    this.factory = kebapFactory
  }
  createKebap(name: KebapType) {
    if (name === KebapType.ORZESZKURA) return new Orzeszkura(this.factory)
    else if (name === KebapType.MODROMOJA) return new ModroMoja(this.factory)
  }
}

/**
 * The difference between the ***abstract factory pattern*** and ***factory method pattern*** is
 * that in the ***factory method pattern*** we create Differnt classes with Hardcoded variations of createKebap method like:
 *
 * class VegeKuraWarzyw {
 *  createKebap(name: KebapFactory)
 *   if (name === KebapType.ORZESZKURA) return new VegeOrzeszkura()
 *
 * so we directly have VegeOrzeszkura class instantiated here
 *
 * But in the ***abstract factory pattern***
 * the vege options is specified by the *this.factory* that we are passing to orzeszkura
 */

const vegeKuraWarzyw = new KuraWarzyw(new VegeKebapFactory())
const chickenKuraWarzyw = new KuraWarzyw(new ChickenKebapFactory())
const muttonKuraWarzyw = new KuraWarzyw(new MuttonKebapFactory())

vegeKuraWarzyw.createKebap(KebapType.ORZESZKURA)
