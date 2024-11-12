"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySDK = void 0;
class MySDK {
    constructor() {
        console.log("MySDK initialized");
    }
    greet(name) {
        return `Hello, ${name}!`;
    }
}
exports.MySDK = MySDK;
