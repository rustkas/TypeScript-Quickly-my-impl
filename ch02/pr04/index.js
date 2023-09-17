"use strict";
class AppState {
    constructor() {
        this.counter = 0;
    }
    static getInstace() {
        if (AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    }
}
// const appState = new AppState()
const appState01 = AppState.getInstace();
const appState02 = AppState.getInstace();
appState01.counter++;
appState01.counter++;
appState02.counter++;
appState02.counter++;
console.log('counter 01', appState01.counter);
console.log('counter 02', appState02.counter);
