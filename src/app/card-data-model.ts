export class CardDataModule {
  constructor(
    public org: string,
    public name: string,
    public img: string,
    public des: string,
    public social: string[]
  ) {}
}
