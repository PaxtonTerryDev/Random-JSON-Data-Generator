"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
const firstName_1 = require("../data/firstName");
const lastName_1 = require("../data/lastName");
class Name {
    getFirstName() {
        const index = Math.floor(Math.random() * Name.firstNames.length);
        return Name.firstNames[index];
    }
    getLastName() {
        const index = Math.floor(Math.random() * Name.lastNames.length);
        return Name.lastNames[index];
    }
    constructor() {
        this.First = this.getFirstName();
        this.Last = this.getLastName();
        this.Full = `${this.First} ${this.Last}`;
    }
}
exports.Name = Name;
Name.firstNames = firstName_1.firstName;
Name.lastNames = lastName_1.lastName;
