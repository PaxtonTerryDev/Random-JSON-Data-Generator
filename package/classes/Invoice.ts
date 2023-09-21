import { InvoiceStatus } from "../enums/InvoiceStatusTypes";

export class Invoice {
  public DateCreated: Date;
  public Status: InvoiceStatus;
  public Number: string;

  private generateDate(yearsBack: number): Date {
    const today = new Date();
    const currentYear = today.getFullYear();
    const start = new Date(currentYear - yearsBack, 0, 1); // January 1st, 'yearsBack' years ago

    // Generate a random timestamp between start and today
    const randomTimestamp =
      start.getTime() + Math.random() * (today.getTime() - start.getTime());

    // Create a new Date object from the random timestamp
    const randomDate = new Date(randomTimestamp);

    return randomDate;
  }
  private generateInvoiceStatus(): InvoiceStatus {
    const statuses = Object.values(InvoiceStatus); // Get all possible statuses
    const index = Math.floor(Math.random() * statuses.length); // Generate a random index
    return statuses[index]; // Return a random status
  }
  public generateInvoiceNumber(invoiceNumberLength: number = 5): string {
    const invoiceNumber = [];
    for (let i = 0; i < invoiceNumberLength; i++) {
      const number = Math.floor(Math.random() * 10);
      invoiceNumber.push(number);
    }
    return invoiceNumber.join("");
  }

  constructor(yearsBack: number = 0, invoiceNumberLength: number = 5) {
    this.DateCreated = this.generateDate(yearsBack);
    this.Status = this.generateInvoiceStatus();
    this.Number = this.generateInvoiceNumber(invoiceNumberLength);
  }
}
