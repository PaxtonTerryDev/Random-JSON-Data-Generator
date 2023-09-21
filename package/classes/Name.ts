import { firstName } from "../data/firstName";
import { lastName } from "../data/lastName";

export class Name {
  static firstNames: string[] = firstName;
  static lastNames: string[] = lastName;

  public First: string;
  public Last: string;
  public Full: string;

  public getFirstName(): string {
    const index = Math.floor(Math.random() * Name.firstNames.length);
    return Name.firstNames[index];
  }

  public getLastName(): string {
    const index = Math.floor(Math.random() * Name.lastNames.length);
    return Name.lastNames[index];
  }

  constructor() {
    this.First = this.getFirstName();
    this.Last = this.getLastName();
    this.Full = `${this.First} ${this.Last}`;
  }
}
