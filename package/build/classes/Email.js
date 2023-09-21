"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const emailDomains_1 = require("../data/emailDomains");
class Email {
    //methods
    getRandomDomain() {
        return Email.emailDomainEndings[Math.floor(Math.random() * Email.emailDomainEndings.length)];
    }
    createRandomString() {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        const length = Math.floor(Math.random() * 12) + 5;
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    createRandomEmail() {
        const username = this.createRandomString();
        return `${username}@${this.getRandomDomain()}`;
    }
    createEmailFromName(firstName, lastName) {
        return `${firstName}.${lastName}@${this.getRandomDomain()}`;
    }
    generateEmail(firstName, lastName) {
        if (firstName && lastName)
            return this.createEmailFromName(firstName, lastName);
        else
            return this.createRandomEmail();
    }
    constructor(firstName, lastName) {
        this.Address = this.generateEmail(firstName, lastName);
    }
}
exports.Email = Email;
//properties
Email.emailDomainEndings = emailDomains_1.emailDomains;
