import { emailDomains } from "../data/emailDomains";

export class Email {
  //properties
  static emailDomainEndings: string[] = emailDomains;
  public Address: string;
  //methods
  private getRandomDomain(): string {
    return Email.emailDomainEndings[
      Math.floor(Math.random() * Email.emailDomainEndings.length)
    ];
  }
  private createRandomString(): string {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const length = Math.floor(Math.random() * 12) + 5;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
  private createRandomEmail(): string {
    const username = this.createRandomString();
    return `${username}@${this.getRandomDomain()}`;
  }
  private createEmailFromName(firstName: string, lastName: string): string {
    return `${firstName}.${lastName}@${this.getRandomDomain()}`;
  }
  private generateEmail(firstName?: string, lastName?: string): string {
    if (firstName && lastName)
      return this.createEmailFromName(firstName, lastName);
    else return this.createRandomEmail();
  }
  constructor(firstName?: string, lastName?: string) {
    this.Address = this.generateEmail(firstName, lastName);
  }
}
