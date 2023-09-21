import { Age } from "./Age";
import { Email } from "./Email";
import { Invoice } from "./Invoice";
import { Name } from "./Name";
import { Phone } from "./Phone";

// Define a type that includes all the possible classes
type DataType = Age | Email | Invoice | Name | Phone;

export class Data {
  // Declare the data object with its interface
  public age?: Age;
  public email?: Email;
  public invoice?: Invoice;
  public name?: Name;
  public phone?: Phone;

  constructor(args: DataType[]) {
    // Loop through each argument
    for (const arg of args) {
      // Check the type of each argument and add it to the data object
      if (arg instanceof Age) {
        this.age = arg;
      } else if (arg instanceof Email) {
        this.email = arg;
      } else if (arg instanceof Invoice) {
        this.invoice = arg;
      } else if (arg instanceof Name) {
        this.name = arg;
      } else if (arg instanceof Phone) {
        this.phone = arg;
      }
    }
  }
}
