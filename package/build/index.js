"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateData = void 0;
const Age_1 = require("./classes/Age");
const Data_1 = require("./classes/Data");
const Email_1 = require("./classes/Email");
const Invoice_1 = require("./classes/Invoice");
const Name_1 = require("./classes/Name");
const Phone_1 = require("./classes/Phone");
class GenerateData {
    constructor(numDataObjects, dataPropertiesStringArray) {
        this.data = [];
        this.jsonData = [];
        for (let i = 0; i < numDataObjects; i++) {
            // Changed <= to < to generate exactly numDataObjects
            const dataPropertiesArray = [];
            // Convert all strings to lowercase and populate dataPropertiesArray
            for (const data of dataPropertiesStringArray.map((d) => d.toLowerCase())) {
                if (data === "age")
                    dataPropertiesArray.push(new Age_1.Age());
                if (data === "email")
                    dataPropertiesArray.push(new Email_1.Email());
                if (data === "invoice")
                    dataPropertiesArray.push(new Invoice_1.Invoice());
                if (data === "name")
                    dataPropertiesArray.push(new Name_1.Name());
                if (data === "phone")
                    dataPropertiesArray.push(new Phone_1.Phone());
            }
            const tempData = new Data_1.Data(dataPropertiesArray);
            this.data.push(tempData);
            this.jsonData.push(JSON.stringify(tempData));
        }
    }
}
exports.GenerateData = GenerateData;
const test = new GenerateData(10, ["age", "email", "invoice", "name", "phone"]);
console.log(test.data);
console.log(test.jsonData);
