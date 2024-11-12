export class MySDK {
  constructor() {
    console.log("MySDK initialized");
  }

  public greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
