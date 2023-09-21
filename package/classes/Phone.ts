export class Phone {
  public AreaCode: string;
  public Number: string;
  public Full: string;

  generateAreaCode(): string {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  }

  generateNumber(): string {
    // Generate the central office code (3 digits)
    const centralOfficeCode = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    // Generate the line number (last 4 digits)
    const lineNumber = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    // Combine them into the final phone number
    return `${centralOfficeCode}-${lineNumber}`;
  }

  constructor() {
    this.AreaCode = this.generateAreaCode();
    this.Number = this.generateNumber();
    this.Full = `${this.AreaCode}-${this.Number}`;
  }
}
