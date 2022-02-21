class MyClass {
  private static instance: MyClass

  private constructor() {}

  static getInstance(): MyClass {
    if (MyClass.instance) {
      return MyClass.instance
    }
    return new MyClass()
  }
}
