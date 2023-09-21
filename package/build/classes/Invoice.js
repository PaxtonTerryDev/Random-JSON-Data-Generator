"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const InvoiceStatusTypes_1 = require("../enums/InvoiceStatusTypes");
class Invoice {
    generateDate(yearsBack) {
        const today = new Date();
        const currentYear = today.getFullYear();
        const start = new Date(currentYear - yearsBack, 0, 1); // January 1st, 'yearsBack' years ago
        // Generate a random timestamp between start and today
        const randomTimestamp = start.getTime() + Math.random() * (today.getTime() - start.getTime());
        // Create a new Date object from the random timestamp
        const randomDate = new Date(randomTimestamp);
        return randomDate;
    }
    generateInvoiceStatus() {
        const statuses = Object.values(InvoiceStatusTypes_1.InvoiceStatus); // Get all possible statuses
        const index = Math.floor(Math.random() * statuses.length); // Generate a random index
        return statuses[index]; // Return a random status
    }
    generateInvoiceNumber(invoiceNumberLength = 5) {
        const invoiceNumber = [];
        for (let i = 0; i < invoiceNumberLength; i++) {
            const number = Math.floor(Math.random() * 10);
            invoiceNumber.push(number);
        }
        return invoiceNumber.join("");
    }
    constructor(yearsBack = 0, invoiceNumberLength = 5) {
        this.DateCreated = this.generateDate(yearsBack);
        this.Status = this.generateInvoiceStatus();
        this.Number = this.generateInvoiceNumber(invoiceNumberLength);
    }
}
exports.Invoice = Invoice;
