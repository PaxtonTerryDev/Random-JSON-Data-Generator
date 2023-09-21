export class Age {
  public Years: number;

  private generateAge(minAge: number = 18, maxAge: number = 100): number {
    if (minAge <= 0)
      throw new Error("minAge must be greater than or equal to 0");
    if (maxAge <= minAge) throw new Error("maxAge must be greater than minAge");
    const min = minAge;
    const max = maxAge;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(minAge: number = 18, maxAge: number = 100) {
    this.Years = this.generateAge(minAge, maxAge);
  }
}
