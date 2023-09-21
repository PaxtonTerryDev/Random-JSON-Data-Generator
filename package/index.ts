import { Age } from "./classes/Age";
import { Data } from "./classes/Data";
import { Email } from "./classes/Email";
import { Invoice } from "./classes/Invoice";
import { Name } from "./classes/Name";
import { Phone } from "./classes/Phone";

type allowedTypes = Age | Email | Invoice | Name | Phone;

export class GenerateData {
  public data: Data[];
  public jsonData: string[];

  constructor(numDataObjects: number, dataPropertiesStringArray: string[]) {
    this.data = [];
    this.jsonData = [];

    for (let i = 0; i < numDataObjects; i++) {
      // Changed <= to < to generate exactly numDataObjects
      const dataPropertiesArray: allowedTypes[] = [];

      // Convert all strings to lowercase and populate dataPropertiesArray
      for (const data of dataPropertiesStringArray.map((d) =>
        d.toLowerCase()
      )) {
        if (data === "age") dataPropertiesArray.push(new Age());
        if (data === "email") dataPropertiesArray.push(new Email());
        if (data === "invoice") dataPropertiesArray.push(new Invoice());
        if (data === "name") dataPropertiesArray.push(new Name());
        if (data === "phone") dataPropertiesArray.push(new Phone());
      }

      const tempData = new Data(dataPropertiesArray);
      this.data.push(tempData);
      this.jsonData.push(JSON.stringify(tempData));
    }
  }
}
