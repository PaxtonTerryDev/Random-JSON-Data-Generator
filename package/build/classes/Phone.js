"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    generateAreaCode() {
        return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join("");
    }
    generateNumber() {
        // Generate the central office code (3 digits)
        const centralOfficeCode = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join("");
        // Generate the line number (last 4 digits)
        const lineNumber = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("");
        // Combine them into the final phone number
        return `${centralOfficeCode}-${lineNumber}`;
    }
    constructor() {
        this.AreaCode = this.generateAreaCode();
        this.Number = this.generateNumber();
        this.Full = `${this.AreaCode}-${this.Number}`;
    }
}
exports.Phone = Phone;
