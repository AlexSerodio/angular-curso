export class Heart {

  constructor(
    public filled = true,
    public filledHeartUrl = '/assets/filled_hearth.png',
    public emptyHeartUrl = '/assets/empty_hearth.png'
  ) {}

    public getHeartUrl(): string {
      return (this.filled) ? this.filledHeartUrl : this.emptyHeartUrl;
    }

}
