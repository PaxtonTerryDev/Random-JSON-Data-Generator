"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const Age_1 = require("./Age");
const Email_1 = require("./Email");
const Invoice_1 = require("./Invoice");
const Name_1 = require("./Name");
const Phone_1 = require("./Phone");
class Data {
    constructor(args) {
        // Loop through each argument
        for (const arg of args) {
            // Check the type of each argument and add it to the data object
            if (arg instanceof Age_1.Age) {
                this.age = arg;
            }
            else if (arg instanceof Email_1.Email) {
                this.email = arg;
            }
            else if (arg instanceof Invoice_1.Invoice) {
                this.invoice = arg;
            }
            else if (arg instanceof Name_1.Name) {
                this.name = arg;
            }
            else if (arg instanceof Phone_1.Phone) {
                this.phone = arg;
            }
        }
    }
}
exports.Data = Data;
