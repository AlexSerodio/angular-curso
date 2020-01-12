import { Offer } from './shared/offer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OffersService {

  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getOffers(spotlightsOnly = true): Promise<Array<Offer>> {
    return this.httpClient.get(`${this.url}/offers?spotlight=${spotlightsOnly}`)
      .toPromise()
      .then((response: any) => response);
  }

}
