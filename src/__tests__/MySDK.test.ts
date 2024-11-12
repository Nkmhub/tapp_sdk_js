import { MySDK } from "../index";

test("MySDK greets properly", () => {
  const sdk = new MySDK();
  expect(sdk.greet("Tester")).toBe("Hello, Tester!");
});
