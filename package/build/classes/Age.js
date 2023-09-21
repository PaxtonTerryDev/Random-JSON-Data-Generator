"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Age = void 0;
class Age {
    generateAge(minAge = 18, maxAge = 100) {
        if (minAge <= 0)
            throw new Error("minAge must be greater than or equal to 0");
        if (maxAge <= minAge)
            throw new Error("maxAge must be greater than minAge");
        const min = minAge;
        const max = maxAge;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    constructor(minAge = 18, maxAge = 100) {
        this.Years = this.generateAge(minAge, maxAge);
    }
}
exports.Age = Age;
